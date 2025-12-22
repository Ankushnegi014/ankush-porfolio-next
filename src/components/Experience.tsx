import { experience } from "@/lib/data";

export function Experience() {
    return (
        <div>
            <h2 className="mb-6 text-3xl font-semibold text-slate-50">Experience</h2>
            <div className="grid gap-4 md:grid-cols-2">
                {experience.map((role) => (
                    <div
                        key={role.company}
                        className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition hover:-translate-y-1 hover:border-cyan-300/70"
                    >
                        <div className="flex flex-row justify-between">
                            <div>
                                <h3 className="text-base font-semibold text-cyan-300">
                                    {role.title}
                                </h3>
                                <p className="text-sm text-slate-300">{role.company}</p>
                            </div>
                            <div>
                                <p className="text-end text-sm text-slate-300">{role.location}</p>
                                <p className="text-end mt-1 text-xs text-slate-400">{role.period}</p>
                            </div>
                        </div>
                        <ul className="mt-4 space-y-2 text-sm text-slate-200">
                            {role.bullets.map((b) => (
                                <li key={b}>• {b}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
}
