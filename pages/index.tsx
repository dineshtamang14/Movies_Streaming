import { NextPage } from 'next';
import Head from 'next/head'
import { MainSlider, ItemSlider, Meta } from '@/components';
import { getHomeData } from '@/ultis/tmdbApi';
import { MovieItemProps } from '@/model/movie';

interface Props {
  data: { [id: string]: MovieItemProps[] };
}

const Home: NextPage<Props> = ({ data }) => {
  return (
    <>
      <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="theme-color" content="#000000" />
        <link rel="shortcut icon" href="favicon.png" type="image/x-icon" />

        <title>Movies by Dinesh Tamang</title>
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

      <div style={{ minHeight: '1000px' }} className="">
        <MainSlider movieItems={data['Popular Movies']} />
        <div className="container px-6">
          {Object.keys(data).map((key) => (
            <ItemSlider title={key} key={key} items={data[key]} />
          ))}
        </div>
      </div>
    </>
  );
};

export const getServerSideProps = async () => {
  try {
    const data = await getHomeData();
    return {
      props: {
        data,
      },
    };
  } catch (error) {
    console.log(error);
  }
};

export default Home;
