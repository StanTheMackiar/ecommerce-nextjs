import Layout from "../components/Layout/Layout";
import styles from "../styles/Home.module.css";
  
export default function Home() {
    return (
        <div className={styles.container}>
            <Layout title="Welcome">
              
            </Layout>
        </div>
    );
}



export async function getStaticProps(){
    return {
        props: {
            
        }
    }
}