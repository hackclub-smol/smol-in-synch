// The ship checklist remembers itself in localStorage. Unlike the Space in the
// tutorial, this one syncs nowhere — it is one browser's private scratch note.
// Without JS the checkboxes still tick; they just forget on reload.
//

const BRIEF_STORE = "in-synch:brief";
const requirements = document.querySelectorAll('.requirement-list input[type="checkbox"]');
const tally = document.querySelector(".tally");

function readBrief() {
    try {
        return JSON.parse(localStorage.getItem(BRIEF_STORE)) || {};
    } catch {
        return {};   // malformed value, or storage blocked in private mode
    }
}

function saveBrief() {
    const state = {};
    requirements.forEach((box) => { if (box.checked) state[box.id] = true; });
    try {
        localStorage.setItem(BRIEF_STORE, JSON.stringify(state));
    } catch {
        // storage blocked or full — the checklist still works for this visit
    }
}

function reportBrief() {
    if (!tally) return;

    const done = [...requirements].filter((box) => box.checked).length;
    const total = requirements.length;

    if (done === 0) {
        tally.textContent = "Tick these off as you go — this browser remembers.";
        return;
    }

    tally.textContent = done === total
        ? `All ${total} conditions met — go submit. `
        : `${done} of ${total}, saved. `;

    const reset = document.createElement("button");
    reset.type = "button";
    reset.textContent = "Clear";
    reset.addEventListener("click", () => {
        requirements.forEach((box) => { box.checked = false; });
        saveBrief();
        reportBrief();
    });
    tally.append(reset);
}

if (requirements.length) {
    const saved = readBrief();
    requirements.forEach((box) => {
        box.checked = saved[box.id] === true;
        box.addEventListener("change", () => {
            saveBrief();
            reportBrief();
        });
    });
    reportBrief();
}
