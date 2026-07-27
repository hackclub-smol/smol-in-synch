// Every submit link on the page gets the same destination, so a site can have
// more than one (e.g. one above the fold and one at the bottom).
const submitButtons = document.querySelectorAll("#submit-button, .submit-link");

// This submits to the Smol Unified DB. If you change it, you won't be able to see your submissions in the Smol dashboard.
// That means you don't get rewards, I'm sorry, talk to me if you need something else. - @Arcade W.
if (submitButtons.length) {
    fetch('/smol.json').then(r => r.json()).then(({ project }) => {
        const href = `https://forms.hackclub.com/t/pu3opxJHjDus?program_slack_channel=${project}`;
        submitButtons.forEach((button) => { button.href = href; });
    })
} else {
    alert("Submit button not found. Please check the ID of the submit button.");
}
