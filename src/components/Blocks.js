import Block from "./Block";

const Blocks = ({blocks, onDelete, onToggle}) => {
    return (
        <>
            {
            blocks.map((block) => 
                <Block key={block.id} block={block} onDelete={onDelete} onToggle={onToggle} />
            )
            }
        </>
    )
}

export default Blocks
