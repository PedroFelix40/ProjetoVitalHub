// import da camera
import { Camera } from 'expo-camera'

// import style
import { CameraView } from './style'

// import do modal
import { Modal } from 'react-native'

// import do react
import { useEffect, useRef } from 'react'

export const CameraComp = () => {
    const cameraRef = useRef(null)

    useEffect(() => {
        (async () => {
            const { status: cameraStatus } = await Camera.requestCameraPermissionsAsync()
        })();
    }, [])

    return (
        <Modal>
            <Camera></Camera>
        </Modal>
    )
}