import {
	IonBackButton,
	IonButton,
	IonButtons,
	IonCard,
	IonCardContent,
	IonContent,
	IonHeader,
	IonIcon,
	IonInput,
	IonItem,
	IonList,
	IonPage,
	IonSelect,
	IonSelectOption,
	IonText,
	IonTextarea,
	IonTitle,
	IonToolbar,
} from '@ionic/react';
import { send } from 'ionicons/icons';
import { useState } from 'react';

export const CreatePermit: React.FC = () => {

	const [permit, setPermit] = useState({
		fullName: '',
		division: '',
		position: '',
		startDate: '',
		endDate: '',
		reason: '',
		attachment: '',
		description: '',
	});

	const handleChange = (e: any) => {
		const { name, value } = e.target;
		setPermit((prevPermit) => ({
			...prevPermit,
			[name]: value,
		}));
	}

	const handleCreatePermit = () => {
		console.log('Create Permit');
		console.log(permit);
	}

	return (
		<IonPage>
			<IonHeader>
				<IonToolbar
					color="attendify"
					style={{
						color: 'white',
					}}>
					<IonButtons slot="start">
						<IonBackButton></IonBackButton>
					</IonButtons>
					<IonTitle>Buat Izin</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent className="ion-padding">
				<IonText color="attendify">
					<h1
						style={{
							fontSize: '2rem',
							fontWeight: '700',
							marginBottom: '-0.5rem',
						}}>
						Mau Buat Izin?
					</h1>
					<p>Isi yang benar ya biar bisa disetujuin sama penyelia kamu...</p>
				</IonText>

				<IonCard>
					<IonCardContent>
						<IonList>
							<IonItem>
								<IonInput
									color="attendify"
									type="text"
									label="Nama Lengkap"
									labelPlacement="stacked"
									placeholder="John Doe"
									name="fullName"
									value={permit.fullName}
									onIonChange={handleChange}></IonInput>
							</IonItem>
							<IonItem>
								<IonInput
									color="attendify"
									type="text"
									label="Divisi"
									labelPlacement="stacked"
									placeholder="Information Technology"
									name="division"
									value={permit.division}
									onIonChange={handleChange}></IonInput>
							</IonItem>
							<IonItem>
								<IonInput
									color="attendify"
									type="text"
									label="Posisi"
									labelPlacement="stacked"
									placeholder="Front End Website Developer"
									name="position"
									value={permit.position}
									onIonChange={handleChange}></IonInput>
							</IonItem>
							<IonItem>
								<IonInput
									color="attendify"
									type="date"
									label="Tanggal Mulai Izin"
									labelPlacement="stacked"
									name="startDate"
									value={permit.startDate}
									onIonChange={handleChange}></IonInput>
							</IonItem>
							<IonItem>
								<IonInput
									color="attendify"
									type="date"
									label="Tanggal Selesai Izin"
									labelPlacement="stacked"
									name="endDate"
									value={permit.endDate}
									onIonChange={handleChange}></IonInput>
							</IonItem>
							<IonItem>
								<IonSelect
									color="attendify"
									label="Alasan Izin"
									placeholder="Izin, Sakit, dan lain-lain"
									labelPlacement="stacked"
									name="reason"
									value={permit.reason}
									onIonChange={(e: any) => handleChange({ target: { name: 'reason', value: e.detail.value } })}>
									<IonSelectOption value="Sakit">Sakit</IonSelectOption>
									<IonSelectOption value="Izin">Izin</IonSelectOption>
									<IonSelectOption value="Lain Lain">Lain Lain</IonSelectOption>
								</IonSelect>
							</IonItem>
							<IonItem>
								<IonInput
									color="attendify"
									type="file"
									label="Lampiran"
									labelPlacement="stacked"
									name="attachment"
									onIonChange={(e: any) => handleChange({ target: { name: 'attachment', value: e.target.files[0] } })}></IonInput>
							</IonItem>
							<IonItem>
								<IonTextarea
									color="attendify"
									label="Keterangan"
									labelPlacement="stacked"
									name="description"
									value={permit.description}
									onIonChange={handleChange}></IonTextarea>
							</IonItem>
						</IonList>
					</IonCardContent>
				</IonCard>

				<IonButton
					color="attendify"
					className="ion-text-center"
					onClick={handleCreatePermit}
					style={{
						width: '100%',
					}}>
					<IonIcon
						icon={send}
						style={{
							marginRight: '0.5rem',
						}}
					/>
					Kirim
				</IonButton>
			</IonContent>
		</IonPage>
	);
};

export default CreatePermit;
