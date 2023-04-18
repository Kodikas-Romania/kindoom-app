import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonRow, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonCol, IonInput, IonButton} from '@ionic/react';
import { useParams } from 'react-router';
import ExploreContainer from '../components/ExploreContainer';
import './Login.css';

const Login: React.FC = () => {

  const { name } = useParams<{ name: string; }>();

  const handleLogin = () => {
    const username = document.getElementById("username") as HTMLInputElement;
    const password = document.getElementById("password") as HTMLInputElement;
    console.log(username.value + " " + password.value);
  }

  const handleRegister = () => {
    const username = document.getElementById("username-reg") as HTMLInputElement;
    const password = document.getElementById("password-reg") as HTMLInputElement;
    const email = document.getElementById("email-reg") as HTMLInputElement;
    console.log(username.value + " " + password.value + " " + email.value);
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>{name}</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent  fullscreen>
        <IonRow className="center">
            <IonCard className="cards">
                <IonCol>
                    <IonCardHeader className="center">
                        <IonCardTitle>Login</IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent className="loginform">
                        <IonInput id="username" fill="solid" labelPlacement="floating" label="Username" />
                        <br />
                        <IonInput id="password" fill="solid" labelPlacement="floating" label="Password" type="password" />
                        <br />
                        <IonButton className="login" expand="block" onClick={handleLogin}>Login</IonButton>
                    </IonCardContent>
                </IonCol>
            </IonCard>
            <IonCard className="cards">
                <IonCol>
                    <IonCardHeader className="center">
                        <IonCardTitle>Register</IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent className="loginform">
                        <IonInput id="username-reg" fill="solid" labelPlacement="floating" label="Choose an username" /><br />
                        <IonInput id="email-reg" fill="solid" labelPlacement="floating" label="Email" /><br />
                        <IonInput id="password-reg" fill="solid" labelPlacement="floating" label="Password" type="password" /><br />
                        <IonButton className="register" expand="block" onClick={handleRegister}>Register</IonButton>
                    </IonCardContent>
                </IonCol>
            </IonCard>
        </IonRow>
      </IonContent>
    </IonPage>
  );
};

export default Login;
