import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'


export function loadGLTFModel(
    scene,
    glbPath,
    options = { reciveShadow: true, castShadow: true }
) {
    const { reciveShadow, castShadow } = options
    return new Promise((resolve, reject) => {
        const loader = new GLTFLoader()

        loader.load(
            glbPath,
            gltf => {
                const obj = gltf.scene
                obj.name = 'dog'
                obj.position.y = 0
                obj.position.x = 0
                obj.reciveShadow = reciveShadow
                obj.castShadow = castShadow
                scene.add(obj)

                obj.traverse(child => {
                    if (child.isMesh) {
                        child.castShadow = castShadow
                        child.receiveShadow = reciveShadow
                    }
                })
                resolve(obj)
            },
            undefined,
            err => reject(err)
        )
    })
}