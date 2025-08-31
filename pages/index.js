import Head from 'next/head';
import { MongoClient } from "mongodb";
import MeetupList from "../components/meetups/MeetupList";
function HomePage(props) {
    return (
    <>
    <Head>
        <title>Meetups</title>
        <meta name="description" content="Browse a huge list of highly active meetups!" />
    </Head>
        <MeetupList meetups={props.meetups} />
    </>


    )
};
export async function getStaticProps() {
    const client = await MongoClient.connect(process.env.MONGODB_URI);
    const db = client.db();
    const meetups = await db.collection('meetups').find().toArray();
    client.close();
    return {
        props: {
            meetups: meetups.map(meetup => ({
                title: meetup.title,
                address: meetup.address,
                image: meetup.image,
                description: meetup.description,
                id: meetup._id.toString()
            }))
        },
        revalidate: 1
    };
};

export default HomePage;