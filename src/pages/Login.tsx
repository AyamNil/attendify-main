import {
    IonButton,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonContent,
    IonHeader,
    IonImg,
    IonInput,
    IonInputPasswordToggle,
    IonItem,
    IonItemGroup,
    IonPage,
    IonSelect,
    IonSelectOption,
} from '@ionic/react';
import React, { useState } from 'react';
// import { loginUser } from '../firebaseconfig';

const Login: React.FC = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [company, setCompany] = useState('');

    async function handleLogin() {
		// const res = await loginUser(userName, password);
		console.log('Username:', userName);
		console.log('Password:',password);
		console.log('Company:',company);
		// if (res === true) {
		// 	console.log('Login successful');
		// } else {
		// 	console.log('Login failed');
		// }
	}

    return (
        <IonPage>
            <IonContent fullscreen>
                <IonCard
                    style={{
                        position: 'absolute',
                        left: 0,
                        right: 0,
                        top: '50%',
                        transform: 'translateY(-50%)',
                        margin: '0 auto',
                        maxWidth: '500px',
                    }}>
                    <IonCardContent
                        style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                        <IonImg
                            src="/assets/images/attendify-logo-color.png"
                            alt="The Wisconsin State Capitol building in Madison, WI at night"
                            style={{
                                maxWidth: '350px',
                                margin: '0 auto',
                            }}
                            className="ion-padding"></IonImg>

                        <IonItemGroup>
                            <IonItem>
                                <IonInput
                                    color="attendify"
                                    label="Alamat Surel"
                                    labelPlacement="stacked"
                                    type="email"
                                    onIonChange={(e: any) => setUserName(e.target.value)}
                                    placeholder="john.doe@mail.com"></IonInput>
                            </IonItem>
                            <IonItem>
                                <IonInput
                                    color="attendify"
                                    label="Kata Sandi"
                                    labelPlacement="stacked"
                                    type="password"
                                    placeholder="••••••••••"
                                    onIonChange={(e: any) => setPassword(e.target.value)}>
                                    <IonInputPasswordToggle
                                        slot="end"
                                        color="attendify"></IonInputPasswordToggle>
                                </IonInput>
                            </IonItem>
                            <IonItem>
                                <IonSelect
                                    color="attendify"
                                    label="Nama Perusahaan"
                                    labelPlacement="stacked"
                                    defaultValue="Pilih Perusahaan"
                                    onIonChange={(e: any) => setCompany(e.target.value)}>
                                    <IonSelectOption value="apple">Apple Company</IonSelectOption>
                                    <IonSelectOption value="banana">Banana Company</IonSelectOption>
                                    <IonSelectOption value="orange">Orange Company</IonSelectOption>
                                </IonSelect>
                            </IonItem>
                        </IonItemGroup>

                        <IonButton
						disabled={userName === '' || password === '' || company === ''}
						 onClick={handleLogin} color="attendify">Masuk</IonButton>
                    </IonCardContent>
                </IonCard>
            </IonContent>
        </IonPage>
    );
};

export default Login;
