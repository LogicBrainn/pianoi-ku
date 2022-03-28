const putih_KEYS = ['q', 'w', 'e', 'r', 't', 'y', 'u','i','o','p','[',']',';',"'"]
const hitam_KEYS = ['2', '3', '5', '6', '7','9','0','=']
const keys = document.querySelectorAll('.key')
const putihKeys = document.querySelectorAll('.key.putih')
const hitamKeys = document.querySelectorAll('.key.hitam')
const tombol = document.querySelector('.piano')



document.addEventListener('keydown', e => {
  if (e.repeat) return
  const keyy = e.key
  const putihKeyIndex = putih_KEYS.indexOf(keyy)
  const hitamKeyIndex = hitam_KEYS.indexOf(keyy)
  
  if (putihKeyIndex > -1) bunyikan(putihKeys[putihKeyIndex])
  if (hitamKeyIndex > -1) bunyikan(hitamKeys[hitamKeyIndex])
  
  
}) 
function bunyikan(konci) {

  const noteAudio = document.getElementById(konci.dataset.note)
  noteAudio.currentTime = 0
  noteAudio.play()
  konci.classList.add('aktif')
  noteAudio.addEventListener('ended',()=>{
    konci.classList.remove('aktif')
  })
  
}
keys.forEach(key => {
  key.addEventListener('click', () => bunyikan(key))
})