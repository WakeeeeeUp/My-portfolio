import { motion } from 'framer-motion';
import Head from 'next/head';

const Home = () => {
  return (
    <div className="min-h-screen snap-y snap-mandatory overflow-y-scroll">
      <Head>
        <title>My Portfolio</title>
      </Head>
      <section className="snap-start flex items-center justify-center h-screen bg-gray-100">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <img src="/path/to/your/avatar.jpg" alt="Avatar" className="rounded-full w-32 h-32" />
        </motion.div>
      </section>
      <section className="snap-start flex items-center justify-center h-screen bg-gray-200">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl">自我介绍</h1>
        </motion.div>
      </section>
      <section className="snap-start flex items-center justify-center h-screen bg-gray-300">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl">项目</h1>
        </motion.div>
      </section>
      <section className="snap-start flex items-center justify-center h-screen bg-gray-400">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl">联系方式</h1>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
