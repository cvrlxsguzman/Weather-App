import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonIcon, IonImg, IonItem, IonLabel, IonPage, IonRouterOutlet, IonSearchbar, IonTabBar, IonTabButton, IonTabs } from "@ionic/react";
import React, { useState } from "react";
import { todayOutline, timeOutline, calendarClearOutline, cloudCircleOutline, star } from "ionicons/icons";
import { Redirect } from "react-router";

export default function Today(props) {
    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState({});

    let pageContent;

    const location = 'sheboygan';
    
    const apiKey = 'cbe8c3256cd606d6062f2453051f5aa0';
    
    const url =  `https://api.openweathermap.org/data/2.5/`;
    const urlFull =  `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`;

    const search = evt => {
        if (evt.key === "Enter") {
            fetch(`${url}weather?q=${query}&units=imperial&APPID=${apiKey}`)
            .then(res => res.json())
            .then(result => {
                setWeather(result);
                setQuery('');
                console.log(result);
            });
        }
    }

    const dateBuilder = (d) => {
        const months = [
            "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
        ];
        const days = [
            "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
        ];

        let day = days[d.getDay()];
        let date = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear();
        return (
            `${day} ${month} ${date}, ${year}`
        );
    }

    if(typeof weather.main != "undefined") {
        pageContent = (
            <IonContent>
                <IonCard color="dark">
                    <IonCardHeader>
                        <IonCardTitle>{weather.name}</IonCardTitle>
                        <IonCardSubtitle>{dateBuilder(new Date())}</IonCardSubtitle>
                    </IonCardHeader>
                </IonCard>

                <IonCard>
                    <IonCardHeader>
                        <div class="ion-text-center">
                            <IonCardTitle>{Math.round(weather.main.temp)} °F</IonCardTitle>
                        </div>
                    </IonCardHeader>
                </IonCard>

                <IonCard>
                    <IonCardHeader>
                        <div class="ion-text-center">
                            <IonCardTitle><h1>{weather.weather[0].description.charAt(0).toUpperCase() + weather.weather[0].description.slice(1)}</h1></IonCardTitle>
                            <IonImg 
                                src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`} 
                                style={{width: "80px", margin: "0 auto"}}
                            />
                            
                        </div>
                    </IonCardHeader>
                </IonCard>
            </IonContent>
            
        );
    }

    return (
        <IonPage>
            <IonContent>
                <IonSearchbar 
                    onIonChange={e => setQuery(e.target.value)}
                    value={query}
                    onKeyPress={search}
                ></IonSearchbar>

                {pageContent}
            </IonContent>

        </IonPage>
    );
}