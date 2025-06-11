import * as S from "./style";

import { Card } from "../card";
import { CardCreator } from "../card-creator";
import { DeleteCard } from "../delete-card";
import { CardState, useCards} from "../../../../context";


type ColumnProps = {
  columnState: CardState;
  title: string;
  onDragStart: (e: React.DragEvent<HTMLDivElement>, cardId: string) => void;
  onDragOver: (e: React.DragEvent<HTMLDivElement>) => void;
  onDrop: (e: React.DragEvent<HTMLDivElement>, newState: CardState) => void;
};

export const Column = ({columnState, title, onDragStart, onDragOver, onDrop}: ColumnProps) => {
  const {cards} = useCards()

  return (
    <S.Container onDragOver={onDragOver} onDrop={(e) => onDrop(e, columnState)}>
      <S.Title>
        <S.StatusBall state={columnState} />
        <span>{title}</span>
      </S.Title>
      <S.CardList>
        
        {
          cards
          .filter(card => card.state === columnState)
          .map(card => (
            <Card
            onDragStart={onDragStart}
            key={card.id}
            {...card}
            />
          ))
        }

        {columnState === CardState.BACKLOG ? (
          <>
            {" "}
            <CardCreator /> <DeleteCard />{" "}
          </>
        ) : null}
      </S.CardList>
    </S.Container>
  )
}
