import Head from 'next/head';
import { NextPage } from 'next';

interface MetaProps {
  title: string;
  description: string;
  image: string;
}

const Meta: NextPage<MetaProps> = ({ title, description, image }) => {
  return (
    <Head>
      <title>{title} By Dinesh Tamang</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta property="image" content={image} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />

      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="theme-color" content="#000000" />
        <link rel="shortcut icon" href="favicon.png" type="image/x-icon" />
        <meta name="description" content="Dinesh Tamang student at Mumbai University, currently in fourth year B.E. Computer Science. Technical skill includes programming in python, java, c++, typescript, Node.js and Databases such as
        sql and Nosql. and i am also familiar with Web Development, Kubernetes, Docker, Ansible, terraform, AWS etc." />
        <meta name="keywords" content="Dinesh Tamang, Computer Science, AWS Solution Architect, Cloud Engineer, Backend Engineer, Portfolio website, Dinesh Rambahadur Tamang" />
        <meta name="author" content="Dinesh Tamang" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Dinesh Tamang | AWS Solution Architect | Mumbai, India" />
        <meta property="og:description" content="Dinesh Tamang student at Mumbai University, currently in fourth year B.E. Computer Science. Technical skill includes programming in python, java, c++, typescript, Node.js and Databases such as
        sql and Nosql. and i am also familiar with Web Development, Kubernetes, Docker, Ansible, terraform, AWS etc." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.dineshtamang.tech" />
        <meta property="og:image" content="https://drive.google.com/file/d/10-0Y76IHGnTIA2_5aEli-ey3cBpTUse3/view?usp=sharing" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Dinesh Tamang | AWS Solution Architect | Mumbai, India" />
        <meta name="twitter:description" content="Dinesh Tamang student at Mumbai University, currently in fourth year B.E. Computer Science. Technical skill includes programming in python, java, c++, typescript, Node.js and Databases such as
        sql and Nosql. and i am also familiar with Web Development, Kubernetes, Docker, Ansible, terraform, AWS etc." />
	      <meta name="twitter:image" content="https://pbs.twimg.com/profile_images/1130796628997156864/HFXo5m91_400x400.jpg" />
    </Head>
  );
};

export default Meta;
