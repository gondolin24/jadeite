import React from 'react';
import {IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonContent} from '@ionic/react';
import Lottieplayer from "./LottiePlayer";
import * as Animation from "../assets/lottie-files/Animation.json"
import { v4 as uuidv4 } from 'uuid'


export const Jadeite: React.FC = () => {
    return (
        <IonContent>
            <IonCard>
                <IonCardHeader>
                    <IonCardTitle>Jadeite Code:</IonCardTitle>
                    <IonCardTitle>{uuidv4().slice(0,23)}</IonCardTitle>

                </IonCardHeader>

                <IonCardContent>
                    <Lottieplayer source={Animation} animationDefault={true}/>
                </IonCardContent>
            </IonCard>
        </IonContent>
    );
};
