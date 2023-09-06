import { PageDataType, QuestionSections } from "./question.types";

export const pageData: PageDataType = {
  pageTitle: 'Form for Ethical use of Artificial Intelligence in Heritage Projects',
  pageDescription: 'Please fill out the form below in response to the following ethical criteria. A ticked box indicates the procedure has been met. Results are found to the right of the form and will be updated as responses are adjusted.'
}

export const questionsdata: QuestionSections = [
  {
    title: 'Autonomy',
    questions: [
      {
        weight: 1,
        question: 'Did you take measures to mitigate the risk of manipulation?',
      },
      {
        weight: 1,
        question: 'Are end-users or other subjects adequately made aware that a decision, content, advice or outcome is the result of an algorithmic decision?',
      },
      {
        weight: 1,
        question: 'Does the AI system empower users to make informed choices and decisions rather than imposing predetermined outcomes?',
      },
      {
        weight: 1,
        question: 'Can the AI system interact seamlessly with other tools, technologies, or systems to enhance overall efficiency and productivity?',
      },
      {
        weight: 1,
        question: 'Does the AI system streamline and optimise tasks by automating routine processes while allowing users to focus on higher-level decision-making?',
      },
    ]
  },
  {
    title: 'Cultural Sensitivity',
    questions: [
      {
        weight: 1,
        question: 'Does the AI system take into account diverse cultural perspectives and historical narratives in its training data?',
      },
      {
        weight: 1,
        question: 'Does the AI system provide multiple interpretations or viewpoints of historical artifacts or contexts, rather than promoting a single narrative?',
      },
      {
        weight: 1,
        question: 'Is the AI system\'s output reviewed and validated by cultural experts and relevant communities before being disseminated?',
      },
      {
        weight: 1,
        question: 'Does the AI system have mechanisms to prevent the perpetuation of stereotypes, biases, or misrepresentations of cultural groups?',
      },
      {
        weight: 1,
        question: 'Does the AI system adhere to legal and ethical guidelines for the protection of cultural heritage and traditional knowledge?',
      },
    ]
  },
  {
    title: 'Data Governance',
    questions: [
      {
        weight: 1,
        question: 'Did you implement the right to withdraw consent, the right to object and the right to be forgotten into the development of the AI system?',
      },
      {
        weight: 1,
        question: 'Is sensitive user data, such as personally identifiable information (PII), stored and transmitted in an encrypted and secure manner?',
      },
      {
        weight: 1,
        question: 'Does the AI system have mechanisms in place to regularly review and update its data to ensure accuracy and relevance?',
      },
      {
        weight: 1,
        question: 'Is there a clear policy and procedure in place for data retention and deletion to ensure data is not retained longer than necessary?',
      },
      {
        weight: 1,
        question: 'Are measures in place to ensure data quality and accuracy?',
      },
    ]
  },
  {
    title: 'Transparency',
    questions: [
      {
        weight: 1,
        question: 'Can you trace back which data was used by the AI system to make a certain decision(s) or recommendation(s)?',
      },
      {
        weight: 1,
        question: 'Are the explanations provided by the AI system understandable to both technical and non-technical users?',
      },
      {
        weight: 1,
        question: 'Is there a process for auditing and validating the AI system\'s explanations?',
      },
      {
        weight: 1,
        question: 'Can the AI system accurately communicate when it encounters situations of uncertainty or lacks sufficient data?',
      },
      {
        weight: 1,
        question: 'Is there an established process for third-party audits to validate the accuracy and transparency of the AI system\'s explanations?',
      },
    ]
  },
  {
    title: 'Diversity/Bias',
    questions: [
      {
        weight: 1,
        question: 'Is your definition of fairness commonly used and implemented in any phase of the process of setting up the AI system?',
      },
      {
        weight: 1,
        question: 'Did you assess whether there could be groups who might be disproportionately affected by the outcomes of the AI system? ',
      },
      {
        weight: 1,
        question: 'Did you assess the risk of the possible unfairness of the system onto the end-user\'s or subject\'s communities?',
      },
      {
        weight: 1,
        question: 'Is there ongoing monitoring in place to identify and address biases that may emerge as the AI system interacts with real-world data?',
      },
      {
        weight: 1,
        question: 'Is the training data used by the AI system regularly reviewed and updated to ensure it reflects diverse and representative samples?',
      },
    ]
  },
  {
    title: 'Environmental Wellbeing',
    questions: [
      {
        weight: 1,
        question: 'Have potential negative impacts of the AI system on the environment been considered?',
      },
      {
        weight: 1,
        question: 'Did you define measures to reduce the environmental impact of the AI system throughout its lifecycle?',
      },
      {
        weight: 1,
        question: 'Did you adopt measures to ensure that the impacts of the AI system on human work are well understood?',
      },
      {
        weight: 1,
        question: 'Is it ensured that the AI system does not risk the de-skilling of the workforce? Did you take measures to counteract de-skilling risks?',
      },
      {
        weight: 1,
        question: 'Did you provide training opportunities and materials for re- and up-skilling?',
      },
    ]
  },
  {
    title: 'Accountability',
    questions: [
      {
        weight: 1,
        question: 'Did you establish a process to discuss and continually monitor and assess the AI system\'s adherence to this ethical framework?',
      },
      {
        weight: 1,
        question: 'Is there a mechanism in place to handle disputes or concerns related to the decisions made by the AI system?',
      },
      {
        weight: 1,
        question: 'Is the AI system designed to provide clear information about its operational status, including any errors or failures?',
      },
      {
        weight: 1,
        question: 'Does the AI system provide a clear and documented trail of its decision-making processes, including the data and algorithms used?',
      },
      {
        weight: 1,
        question: 'Does the organisation regularly conduct audits or assessments of the AI system\'s performance and decision outcomes to ensure accountability?',
      },
    ]
  },
]