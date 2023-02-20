import { IncrementalCache } from "next/dist/server/lib/incremental-cache";

export const projects = [
  {
    title: 'Detecting Inconsistencies in Network Data Using Machine Learning',
    description: "The purpose of this project was to develop a Machine Learning model that would detect anomalies in network data in order to enhance information security. As part of the project, the team explored and evaluated various methods for identifying inconsistencies in network data and provided practical recommendations. Potential security breaches were identified with high accuracy using the final model. Organizations can prevent data breaches by proactively detecting anomalies in network data.",
    image: '/images/Data-inco.jpeg',
    tags: ['ML Algorithms','Python'],
    visit: 'https://github.com/mehuljhaver4/Identifying-Inconsistencies-in-Network-Data-using-Machine-Learning',
    id: 1,
  },
  {
    title: 'Recommendation Systems',
    description: "This project involved implementing three types of recommender systems: simple, content-based, collaborative filtering, and hybrid. The goal of the project was to provide personalized recommendations to users based on their previous history, the content of the items being recommended, or a combination of both. By using these different approaches, the project aimed to identify which methods provided the most accurate and useful recommendations for users. This course project provides a valuable foundation for understanding the principles of recommender systems and their applications in real-world scenarios such as e-commerce, entertainment, and social media.",
    image: '/images/Recommender.webp',
    tags: ['Python'],
    visit: 'https://github.com/mehuljhaver4/Recommender-System',
    id: 2,
  },
    {
    title: 'P2P File sharing system',
    description: "This project involved building a peer-to-peer file-sharing software that was designed to operate similarly to BitTorrent. One of the key features of BitTorrent is the choking-unchoking mechanism, which was successfully implemented in the software. This mechanism ensures optimal use of network resources by allowing the software to intelligently allocate bandwidth between peers, based on their current download speeds. The resulting software offers a user-friendly and efficient file-sharing experience, allowing users to download and share files quickly and reliably.",
    image: '/images/P2P.png',
    tags: ['Java'],
    visit: 'https://github.com/mehuljhaver4/PeerToPeerProgramming',
    id: 3,
  },
  {
    title: 'Pneumonia Detection',
    description: "This project involved designing a system that utilized Deep Learning techniques to analyze chest X-ray images and detect pneumonia patches. The system employed a Convolution Neural Network to achieve an accuracy rate of 90% in detecting pneumonia patches. The system can be used to assist radiologists and doctors in detecting pneumonia at an earlier stage, leading to earlier diagnosis and treatment. Ultimately, this project has the potential to improve patient outcomes and reduce healthcare costs associated with delayed diagnosis and treatment of pneumonia.",
    image: '/images/Pneumonia.jpeg',
    tags: ['Python', 'Computer Vision', 'Deep Learning'],
    visit: 'https://github.com/mehuljhaver4/Pneumonia-Detection',
    id: 4,
  },
];


export const Paperprojects = [
  {
    title: 'Employee Turnover Prediction System',
    description: "This project involved developing a Machine Learning model to accurately predict voluntary resignations by employees within an organization. In addition to predicting whether an employee would resign, the model was also able to estimate the time span and likelihood of the resignation occurring. This information can be used by organizations to proactively identify and address potential retention issues, and ultimately improve employee satisfaction and retention rates.",
    image: '/images/employee-turnover.png',
    tags: ['ML Algorithms','Python'],
    paper: 'https://ieeexplore.ieee.org/document/9036180/',
    visit: 'https://github.com/mehuljhaver4/Employee-Turnover-Prediction',
    id: 0,
  },
];

export const Workprojects = [
  {
    title: 'Optimized Caching Algorithm for User Space File Systems',
    description: "This project involved in the development of an optimal and efficient caching algorithm for a user space file system. Specifically, an algorithm was designed to support 1024 threads accessing file attributes simultaneously in an efficient way. By allowing multiple threads to work on the cache in parallel, the time taken to access file attributes was accelerated by 33%. Additionally, techniques were optimized for adding, accessing, and removing file attributes from the cache. These optimizations will ultimately lead to improved performance and efficiency of the user space file system.",
    image: '/images/caching.jpeg',
    tags: ['C/C++','Linux','File Systems'],
    company: '(Samsung Semiconductors Inc.)',
    id: 0,
  },
  {
    title: 'Anti-Money Laundering System',
    description:"This project involved designing a Machine Learning model to assist a bank with Anti-Money Laundering (AML) efforts. The model was able to decrease the need for manual transaction verification at the bank by 53% by identifying anomalous transactions. In addition, a name-matching model was fabricated to match the names of account holders who were probable suspects of money laundering. These models have the potential to significantly reduce the amount of time and resources needed to identify and investigate cases of money laundering, while also improving the accuracy of such efforts. Overall, this project demonstrates the potential of Machine Learning in aiding financial institutions with AML efforts.",
    image: '/images/money-wash.jpeg',
    tags: ['ML Algorithms','Python', 'R','Shiny'],
    company: '(Risk Edge Solutions)',
    id: 1,
  },
];

export const TimeLineData = [
  { year: 'May 2020', text: 'Graduated from Manipal University Jaipur with Bachelor of Technology in Computer Science and Engineering', },
  { year: 'Aug 2020', text: 'Started working as a Machine Learning Engineer at Risk Edge Solutions', },
  { year: 'Aug 2021', text: 'Master of Science in Computer and Information Sciences - University of Florida', },
  { year: 'May 2022', text: 'Worked as a Software Development Intern at Samsung Semiconductors Inc.', },
];