import { Fragment } from 'react';
import NewMeetupForm from '../../components/meetups/NewMeetupForm';
import { useRouter } from 'next/router';
import Head from 'next/head';
import dynamic from 'next/dynamic';
function NewMeetupPage() {
    const router = useRouter();
    async function addMeetupHandler(enteredMeetupData) {
        const response = await fetch('/api/new-meetup', {
            method: 'POST',
            body: JSON.stringify(enteredMeetupData),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await response.json();
        router.push('/');
    };
    return (
        <Fragment>
            <Head>
                <title>Add a New Meetup</title>
                <meta name="description" content="Add your own meetups and share them with the world!" />
            </Head>
            <NewMeetupForm onAddMeetup={addMeetupHandler} />
        </Fragment>
    );
}

export default NewMeetupPage;