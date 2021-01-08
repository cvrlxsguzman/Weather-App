import { IonBackButton, IonButton, IonButtons, IonContent, IonFooter, IonHeader, IonIcon, IonLabel, IonMenuButton, IonPage, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs, IonTitle, IonToolbar } from '@ionic/react';
import { todayOutline, timeOutline, calendarClearOutline, cloudCircleOutline, star } from "ionicons/icons";
import React from 'react';
import { Redirect } from 'react-router';
import './Home.css';
import Ajax from '../components/Ajax';

const Home = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton autoHide={false} />
          </IonButtons>

          <IonTitle>Sheboygan, WI</IonTitle>
        </IonToolbar>
      </IonHeader>

      <h1>Hello</h1>
      <Ajax />
      <h1>Hello</h1>
      <h1>Hello</h1>
      

      <IonTabs>
        <IonRouterOutlet>
          <Redirect exact path="/" to="/today" />
        </IonRouterOutlet>

        <IonTabBar slot="bottom">
          <IonTabButton tab="today" href="/today">
            <IonIcon icon={todayOutline} />
            <IonLabel>Today</IonLabel>
          </IonTabButton>

          <IonTabButton tab="hourly" href="">
            <IonIcon icon={timeOutline} />
            <IonLabel>Hourly</IonLabel>
          </IonTabButton>
          
          <IonTabButton tab="daily" href="">
            <IonIcon icon={calendarClearOutline} />
            <IonLabel>Daily</IonLabel>
          </IonTabButton>

          <IonTabButton tab="radar" href="">
            <IonIcon icon={cloudCircleOutline} />
            <IonLabel>Radar</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>

    </IonPage>
  );
};

export default Home;
