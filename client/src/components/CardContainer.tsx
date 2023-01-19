type CardContainerProps = {
    text: string
}

export default function CardContainer({ text }: CardContainerProps) {
    return (
        <div className="cursor-pointer mb-2 py-2 px-4 max-w-xs rounded-lg">
            { text }
        </div>
    )
}