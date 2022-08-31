import { getAll as getAllPlaces } from '../services/places'
import { useEffect, useState } from 'react'
import Card from '../components/Card'
import ModalComments from '../components/ModalComments'
import { useModal } from '../hooks/useModal'
import { loadComments } from '../services/socket'
import ModalAddPlace from '../components/ModalAddPlace'
import { useSelector } from 'react-redux'
import BarLoader from 'react-spinners/BarLoader'
import styles from '../styles/places.module.css'

function Places({ type }) {
  const user = useSelector((store) => store)

  const [loading, setLoading] = useState(false)
  const [places, setPlaces] = useState([])
  const [currentPlace, setCurrentPlace] = useState('')
  const [comments, setComments] = useState([])
  const [isOpenModal1, openModal1, closeModal1] = useModal()
  const [isOpenModal2, openModal2, closeModal2] = useModal()

  useEffect(() => {
    setLoading(true)
    getAllPlaces(type).then((places) => {
      setPlaces(places)
      setLoading(false)
    })

    loadComments(setComments)
  }, [])

  return (
    <div className={styles.container}>
      {loading && (
        <div className="spinner-container">
          <BarLoader size={1} color={'#048c7f'} loading={loading} />
        </div>
      )}

      {places.map((place) => (
        <Card
          place={place}
          openModal={openModal1}
          setCurrentPlace={setCurrentPlace}
          key={place.id}
        />
      ))}
      {user ? (
        <div className={styles.addCard} onClick={openModal2}>
          <img src={'/assets/add-img.svg'} alt="add-img" />
          <h3>Añadir Lugar</h3>
        </div>
      ) : null}
      <ModalComments
        show={isOpenModal1}
        closeModal={closeModal1}
        comments={comments}
        currentPlace={currentPlace}
        setComments={setComments}
      />
      <ModalAddPlace
        show={isOpenModal2}
        closeModal={closeModal2}
        type={type}
        setPlaces={setPlaces}
      />
    </div>
  )
}

export default Places
