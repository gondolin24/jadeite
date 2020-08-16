import {IonButtons, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar} from '@ionic/react';
import React from 'react';
import {useParams} from 'react-router';
import './Page.css';
import {JadeiteInfo} from "../components/info/jadeite-info";
import {Jadeite} from "../components/Jadeite";


function redirectPage(name: string) {

    switch (name) {
        case 'Info':
            return <JadeiteInfo/>
        default:
            return <Jadeite/>
    }

}

const Page: React.FC = () => {

    const {name} = useParams<{ name: string; }>();

    const content = redirectPage(name)

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton/>
                    </IonButtons>
                    <IonTitle>{name}</IonTitle>
                </IonToolbar>
            </IonHeader>
            {content}
        </IonPage>
    );
};

export default Page;
