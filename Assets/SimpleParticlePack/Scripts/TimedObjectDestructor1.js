private var thisParticleSystem : ParticleSystem;

 

function Start () {

 

    thisParticleSystem = this.GetComponent(ParticleSystem);

    

    if (!thisParticleSystem.loop) {

        Destroy(this.gameObject, thisParticleSystem.duration);

    }

 

}