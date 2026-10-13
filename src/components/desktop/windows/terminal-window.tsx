import React, { useState, useEffect, useRef } from 'react';

const TerminalWindow = () => {
    const [lines, setLines] = useState<string[]>([
        'Last login: Sun Mar 8 22:20:19 on console',
        'leo@macbook-pro ~ % ',
    ]);
    const [input, setInput] = useState('');
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [lines]);

    const handleCommand = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            const newLines = [...lines];
            const cmd = input.trim().toLowerCase();

            newLines[newLines.length - 1] = `leo@macbook-pro ~ % ${input}`;

            if (cmd === 'ls') {
                newLines.push('Applications Documents Downloads Library Movies Music Pictures');
            } else if (cmd === 'whoami') {
                newLines.push('leo (Leonardo - Full Stack Developer)');
            } else if (cmd === 'clear') {
                setLines(['leo@macbook-pro ~ % ']);
                setInput('');
                return;
            } else if (cmd === 'help') {
                newLines.push('Supported commands: ls, whoami, clear, help, date');
            } else if (cmd === 'date') {
                newLines.push(new Date().toString());
            } else if (cmd !== '') {
                newLines.push(`zsh: command not found: ${cmd}`);
            }

            newLines.push('leo@macbook-pro ~ % ');
            setLines(newLines);
            setInput('');
        }
    };

    return (
        <div
            ref={scrollRef}
            className="h-full bg-[#1e1e1e]/90 text-green-400 font-mono text-sm p-4 overflow-auto rounded-b-lg"
            onClick={() => document.getElementById('terminal-input')?.focus()}
        >
            {lines.map((line, i) => (
                <div key={i} className="whitespace-pre-wrap flex">
                    {i === lines.length - 1 ? (
                        <div className="flex w-full">
                            <span>{line}</span>
                            <input
                                id="terminal-input"
                                autoFocus
                                className="bg-transparent outline-none flex-1 lowercase text-white"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={handleCommand}
                            />
                        </div>
                    ) : (
                        <span className={line.startsWith('leo@') ? 'text-green-400' : 'text-gray-300'}>{line}</span>
                    )}
                </div>
            ))}
        </div>
    );
};

export default TerminalWindow;
