import * as github from "@actions/github";
import * as core from "@actions/core";

async function run() {
    try {
        const ref = github.context.ref;
        const matcher = /^refs\/(tags|heads)\/(.*)$/ig;

        if (!ref) {
            console.log('No ref');
            return;
        }

        console.log('Ref: ' + ref);

        const matches = matcher.exec(ref);

        if (matches && matches.length === 3) {
            const refType = matches[1] === 'heads' ? 'branch' : 'tag';
            const refName = matches[2];

            console.log('Type: ' + refType);
            console.log('Name: ' + refName);

            core.setOutput("ref_type", refType);
            core.setOutput("ref_name", refName);
        } else {
            console.log('Matches: ' + (matches ? matches.length : null));
        }
    } catch (error) {
        core.setFailed(error.message);
    }
}

run();
