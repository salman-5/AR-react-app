import logo from './logo.svg';
import './App.css';
import { Canvas} from '@react-three/fiber'
import { useGLTF, Stage, PresentationControls } from '@react-three/drei'
import {useState} from 'react'
function Models(props){
  const {scene}= useGLTF("/camelglb.glb");
  return <primitive object={scene} {...props}/>

}

function App() {
  return (
    <div className="App">
    <Canvas dpr={[1,2]} shadows camera={{fov: 45}} style={{"position": "absolute"}}>
      <color attach="background" args={["#101010"]}>
      </color>
      <PresentationControls speed={1.5} global zoom={.5} polar={[-0.1, Math.PI/4]}>
        <Stage environment="">
          <Models scale={0.01}/>
        </Stage>
      </PresentationControls>

    </Canvas>
    </div>
  );
}

export default App;
