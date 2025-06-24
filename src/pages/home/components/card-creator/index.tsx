import * as S from "./style"
import plus from "../../../../assets/plus.svg"
import { useState } from "react"
import { Button } from "../../../../components"
import { CardState, useCards } from "../../../../context"

export const CardCreator = () => {
    const {createCard} = useCards()

    const [isEditing, setIsEditing] = useState<boolean>(false)
    const [title, setTitle] = useState<string>("")
    const [description, setDescription] = useState<string>("")

    const handleConfirm = () => {
        const trimmedTitle = title.trim()
        const trimmedDescription = description.trim()
      
        if (trimmedTitle === "" && trimmedDescription === "") {
          alert("O card precisa ter pelo menos um título ou descrição.")
          return
        }
      
        createCard({
          title: trimmedTitle,
          description: trimmedDescription,
          state: CardState.BACKLOG,
        })
      
        setTitle("")
        setDescription("")
        setIsEditing(false)
      }      

    if(!isEditing) {
        return (
            <S.Container onClick={() => setIsEditing(prevState => !prevState)}>
                <img src={plus} alt="Plus Icon" />
            </S.Container>
        )
    }

    return (
        <S.EditContainer>
            <S.Input
            type="text"
            placeholder="Digite o título"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            />
            <S.Input
            type="text"
            placeholder="Digite a descrição"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            />
            <Button onClick={handleConfirm}>Confirmar</Button>
        </S.EditContainer>
    )
}