"use client"

import { useEffect, useState } from 'react'
import Markdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import remarkGfm from 'remark-gfm'
import "../text.css"
import { Loader2 } from 'lucide-react'

export default function Privacy() {
    const [markdown, setMarkdown] = useState('')
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            let response = await fetch("https://raw.githubusercontent.com/KenykaGit/Voicy/refs/heads/main/privacy.md")
            const markdownText = await response.text()
            setMarkdown(markdownText)

            response = await fetch("https://api.github.com/repos/KenykaGit/Voicy/commits?path=privacy.md&page=1&per_page=1")
            const commit = await response.json()
            const date = new Date(commit[0].commit.committer.date)

            const formatted = `Последнее обновление: ${date.toLocaleDateString('ru-RU', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric',
            })}`

            const changeDateElement = document.querySelector('.change-date')
            if (changeDateElement) {
                changeDateElement.textContent = formatted
            }

            setIsLoading(false)
        }

        fetchData()
    }, [])

    return (
        <>
            {isLoading ? (
                <div className="flex items-center justify-center min-h-screen">
                    <Loader2 color="#c27aff" className="w-16 h-16 animate-spin" />
                </div>
            ) : (
                <div className="flex flex-col grow justify-center items-center">
                    <div className="text max-w-[1000px] w-full mb-12 pl-4">
                        <Markdown rehypePlugins={[rehypeRaw]} remarkPlugins={[remarkGfm]}>
                            {markdown}
                        </Markdown>
                    </div>
                </div>
            )}
        </>
    )
}