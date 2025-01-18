const COMMANDS = [
  {
    command: "staff",
    description: "Technical Staff",
  },
  {
    command: "fund",
    description: "Freestyle Fund",
  },
  {
    command: "apply",
    description: "Join the Team",
  },
  {
    command: "info",
    description: "Contact Info",
  },
];

/*
const getProjects = async () => {
  const projects = await (await fetch("/api/projects")).json();
  const projectHTML =
    `<h3>Technical Staff Projects (You can scroll)</h3>` +
    projects
      .map(
        (project) => `<div class="command">
        <a href="${project.link}" target="_blank"><b class="command">${
          project.name
        }</b></a> - <b>${project.stack.join(", ")}</b>
        <p class="meaning">${project.description}</p>
      </div>`
      )
      .join("");
  return projectHTML;
};
*/

const getContacts = async () => {
  const contactMediums = await (await fetch("/api/contacts")).json();
  return contactMediums
    .map(
      (contact) => `<div style="display: flex; justify-content: space-between;">
      <p style="font-size: 15px">${contact.medium}</p>
      <a class="meaning" href="${contact.link}" target="_blank">${contact.username}</a>
    </div>`
    )
    .join("");
};

export const CONTENTS = {
  help: () =>
    COMMANDS.map(
      (command) => `<div style="display: flex; justify-content: space-between;">
        <p style="font-size: 15px">${command.command}</p>
        <p>${command.description}</p>
      </div>`
    ).join("") +
    `<br />
      <div class="command">Type one of the above to view. For eg. <span style="color: var(--secondary)">staff</span></div>`,
  staff: () => `
    <div style="display: flex; flex-direction: column; gap: 1rem;">
      <p style="font-size: 15px;">
        Members of our Technical Staff work in small teams to build things they\’re passionate about. 
        Current members are working at companies like OpenAI, Ramp, and HRT. 
      </p>
      <p style="font-size: 15px;">
        If you like building cool shit with engaged people, 
        <a href="https://55w5873zbph.typeform.com/to/u9Cmu1hN" target="_blank" rel="noopener noreferrer">
          Apply
        </a>
      </p>
    </div>
  `,
  //projects: () => ``,
  fund: () => `
    <div style="display: flex; flex-direction: column; gap: 1rem;">
      <p style="font-size: 15px;">
        We offer equity-free grants + credits to technical teams going 0 to 1. If you're building something cool and need funding,
        <a href="https://55w5873zbph.typeform.com/to/u9Cmu1hN" target="_blank" rel="noopener noreferrer">
          Apply
        </a>
      </p>
    </div>
  `,
  apply: () => {    
    window.open("https://55w5873zbph.typeform.com/to/u9Cmu1hN", "_blank");
    return "";
  },
  info: getContacts,
  error: (input) =>
    `<div class="help-command">sh: Unknown command: ${input}</div><div class="help-command">See \`help\` for info`,
};