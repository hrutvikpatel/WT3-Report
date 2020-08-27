const goals = [
  {
    title: "Goal 1: Oral Communication",
    body: "Having technical communication skills in the workplace is very important. I initially faced a lot of challenges in understanding the terminologies and methodologies applied in discussions. As a result, the most important goal for my first co-op was to be able to communicate professionally. I accomplished this goal by carefully listening, understanding and asking questions during meetings about terminologies and methodologies utilized. Having proper communication skills and knowledge of methodologies, allowed me to effectively discuss my ideas with colleagues.",
    status: "achieved",
  },
  {
    title: "Goal 2: Depth & Breadth of Understanding",
    body: "My tasks were UI based and required knowledge of ReactJS. However, knowing only ReactJS was not ideal to properly build the UI. I would at times require knowledge of how the backend works and use it to test my UI components. Thus, I would also require knowledge of the in-house API Orchestration and how to run it locally using Docker to test it. I measured my success by recognizing how easy it had become to utilize the new technologies to solve the tasks at hand.",
    status: "achieved"
  },
  {
    title: "Goal 3: Personal Learning Goal",
    body: "I want to become aware of the various roles in my field because this will allow me to explore different career paths. I achieved this goal by asking team members what their position is about, how it impacts the team and what it's like to work day-to-day in their position. I measured my success by eventually understanding the job responsibilities of each role and how they all contribute to the project's success.",
    status: "achieved"
  },
  {
    title: "Goal 4: Personal Learning Goal",
    body: "I wanted to learn specifically how the DevOps Engineer works with the team to streamline the CICD pipeline. I planned to achieve this goal by learning from a DevOps on my team who agreed to teach me. However, I was unable to achieve this goal because there were tight project deadlines in the fall.",
    status: "failed"
  },
  {
    title: "Goal 5: Technological Literacy",
    body: "My weakness as a software developer is that I tend to complete the task at hand as fast as possible. This resulted in poor design, inconsistent standards, and code repetition. My mentor had recognized this as an area of improvement and advised me to always start a task by designing the requirements, thinking of edge cases and testing out the code based on the requirements before submitting the code. Eventually, my code submissions had fewer criticisms on these issues, which illustrated that I had improved. ",
    status: "achieved"
  },
  {
    title: "Goal 6: Leadership",
    body: "My tech lead had set this goal for me to train team members on the Orchestration and UI technologies before my co-op ended. My action plan was to mentor the team members with application design, code flow and troubleshooting problems as required, as well as set up their environments. In retrospect, I was able to train the new co-op, contractors and full-time software developers on React and NCR's API toolkit.",
    status: "achieved"
  }
];

$(function () {

  $("#exampleModal").on('show.bs.modal', function (event) {
    const card = $(event.relatedTarget);
    const id = card.data('modal-id');
    const modal = $(this);
    const { status, title, body } = goals[Number(id)];

    const modalTitle = document.getElementById("modal-status");
    modalTitle.classList.remove('failed');
    modalTitle.classList.remove('achieved');
    modalTitle.classList.add(status);

    modal.find('.modal-title').text(title);
    modal.find('.modal-body').text(body);
  });
});