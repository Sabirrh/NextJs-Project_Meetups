    import { MongoClient,ObjectId } from "mongodb";
    import Head from "next/head";
    import MeetupDetails from "../../components/meetups/MeetupDetails";
    function NewMeetupDetails(props){
        return (
            <>
            <Head>
                <title>{props.meetupsData.title}</title>
                <meta name="description" content={props.meetupsData.description} />
            </Head>
            <MeetupDetails
                image={props.meetupsData.image}
                title={props.meetupsData.title}
                address={props.meetupsData.address}
                description={props.meetupsData.description}
            />
            </>
        )
    };

    export async function getStaticPaths(){
        const client = await MongoClient.connect(process.env.MONGODB_URI);
        const db = client.db();
        const meetupsCollection = db.collection('meetups');
        const meetups = await meetupsCollection.find({},{_id:1}).toArray();
        return {
            fallback:'blocking',
            paths:meetups.map(meetup =>({
                params:{
                    meetupId:meetup._id.toString()
                }
            }))
        }
    }
    export async function getStaticProps(context){
        //fetch data from API
    const meetupId = context.params.meetupId;
    const client = await MongoClient.connect(process.env.MONGODB_URI);
        const db = client.db();
        const meetupsCollection = db.collection('meetups');
        const selectedMeetup = await meetupsCollection.findOne({_id: new ObjectId(meetupId)});
        return{ 
            props:{
                meetupsData:{
                    id:selectedMeetup._id.toString(),
                    title:selectedMeetup.title,
                    address:selectedMeetup.address,
                    image:selectedMeetup.image,
                    description:selectedMeetup.description
                }
            }
        }
    }

    export default NewMeetupDetails;