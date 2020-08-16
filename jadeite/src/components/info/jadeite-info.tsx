import React from 'react';
import {IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonContent, IonImg} from '@ionic/react';

export const JadeiteInfo: React.FC = () => {
    return (
            <IonContent>
                <IonCard>
                    <IonCardHeader>
                        <IonCardTitle>Price</IonCardTitle>
                    </IonCardHeader>
                    <IonImg src={require('../../assets/images/Jadiete-price.jpg')} />

                    <IonCardContent>
                        The most expensive mineral in the world is Jadeite, coming in at a whopping $3 million per carat. What makes this mineral so expensive is its rarity and its beauty.
                    </IonCardContent>
                </IonCard>
                <IonCard>
                    <IonCardHeader>
                        <IonCardTitle>Name</IonCardTitle>
                    </IonCardHeader>
                    <IonImg src={require('../../assets/images/Jadeite-raw.jpg')} />
                    <IonCardContent>
                        The name jadeite is derived from the Spanish phrase "piedra de ijada" which means "stone of the side".
                        The Latin version of the name, lapis nephriticus, is the origin of the term nephrite, which is also a variety of jade.
                    </IonCardContent>
                </IonCard>


                <IonCard>
                    <IonCardHeader>
                        <IonCardTitle>Chemical Make-up</IonCardTitle>
                    </IonCardHeader>
                    <IonImg src={require('../../assets/images/Jadeite-chemical.jpg')} />

                    <IonCardContent>
                        Jadeite forms solid solutions with other pyroxene endmembers such as augite and diopside (CaMg-rich endmembers), aegirine (NaFe endmember), and kosmochlor (NaCr endmember).
                        Pyroxenes rich in both the jadeite and augite endmembers are known as omphacite.
                    </IonCardContent>
                </IonCard>

            </IonContent>
    );
};
