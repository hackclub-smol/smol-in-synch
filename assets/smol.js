const submitButton = document.getElementById("submit-button");

// This submits to the Smol Unified DB. If you change it, you won't be able to see your submissions in the Smol dashboard.
// That means you don't get rewards, I'm sorry, talk to me if you need something else. - @Arcade W.
if (submitButton) {
    fetch('/smol.json').then(r => r.json()).then(({ project }) => {
        submitButton.href = `https://forms.hackclub.com/t/pu3opxJHjDus?program_slack_channel=${project}`;
    })
} else {
    alert("Submit button not found. Please check the ID of the submit button.");
}