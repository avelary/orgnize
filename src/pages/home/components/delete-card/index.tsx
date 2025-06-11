import * as S from "./style"
import trash from "../../../../assets/trash.svg"
import { useCards } from "../../../../context"


export const DeleteCard = () => {
  const {deleteCard} = useCards()
  const onDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
  }

  const onDrop = (e: React.DragEvent<HTMLDivElement>) => {
    deleteCard(e.dataTransfer.getData("cardId"))
  }

  return (
    <S.Container onDragOver={onDragOver} onDrop={onDrop}>
      <img src={trash} alt="Trash Icon" />
    </S.Container>
  )
}
