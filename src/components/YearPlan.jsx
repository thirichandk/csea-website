import React, { useEffect, useRef, useState } from 'react';
import { oddSemester, evenSemester } from '../data/yearPlan';
import { sdgs } from '../data/sdgs';

const sectionConfig = [
  { key: 'odd', title: 'ODD SEMESTER', data: oddSemester },
  { key: 'even', title: 'EVEN SEMESTER', data: evenSemester }
];

function YearPlanRow({ item, index }) {
  return (
    <div
      className={`group relative flex gap-4 rounded-[1.2rem] border px-4 py-4 text-sm shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-lg ${
        index % 2 === 0
          ? 'border-slate-200/80 bg-white/95'
          : 'border-sky-100 bg-sky-50/80'
      }`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="flex flex-col items-center">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-sky-600 to-blue-500 text-sm font-semibold text-white shadow-md">
          {item.id}
        </span>
        {index !== 7 && <span className="mt-3 h-full w-px min-h-[20px] bg-sky-200" />}
      </div>
      <div className="flex-1 sm:flex sm:items-center sm:justify-between">
        <div>
          <p className="font-semibold text-slate-800">{item.event}</p>
          <div className="mt-2 flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-sky-100 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-sky-700">
              SDG {item.sdg}
            </span>
            <p className="text-xs uppercase tracking-[0.24em] text-slate-500">
              Planned milestone
            </p>
          </div>
        </div>
        <span className="mt-3 inline-flex rounded-full bg-sky-100 px-3 py-1 text-sm font-semibold text-sky-700 sm:mt-0">
          {item.date}
        </span>
      </div>
    </div>
  );
}

export default function YearPlan() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`relative overflow-hidden rounded-[2rem] border border-sky-100/80 bg-gradient-to-br from-sky-50 via-white to-blue-100/70 px-4 py-10 shadow-[0_30px_90px_-30px_rgba(14,116,144,0.4)] transition-all duration-700 sm:px-6 lg:px-10 ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      }`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(14,165,233,0.22),_transparent_45%)]" />
      <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-sky-200/30 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-44 w-44 rounded-full bg-blue-200/20 blur-3xl" />
      <div className="relative mx-auto max-w-7xl">
        <div className="text-center">
          <div className="mb-4 inline-flex items-center rounded-full border border-sky-200/80 bg-white/80 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.35em] text-sky-700 shadow-sm backdrop-blur">
            YEAR PLAN
          </div>
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.45rem]">
            YEAR PLAN 2026–2027
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-lg text-slate-600">
            A vivid roadmap of the academic year’s initiatives, technical events, and growth-driven activities.
          </p>
        </div>

        <div className="mt-10 space-y-8">
          <div className="rounded-[1.75rem] border border-sky-200/70 bg-white/75 p-6 shadow-[0_20px_55px_-25px_rgba(2,132,199,0.45)] backdrop-blur lg:p-8">
            <div className="mb-6 flex flex-col gap-3 text-center lg:flex-row lg:items-end lg:justify-between lg:text-left">
              <div>
                <h3 className="text-xl font-semibold text-slate-900">
                  SDGs Addressed Through Our Annual Activities
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  Our initiatives align with meaningful global goals while strengthening student growth.
                </p>
              </div>
              <div className="rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-sky-700">
                Impact driven
              </div>
            </div>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
              {sdgs.map((sdg) => (
                <article
                  key={sdg.number}
                  className={`group rounded-[1.35rem] border border-white/70 bg-gradient-to-br ${sdg.gradient} p-5 text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl`}
                >
                  <div className="flex items-start justify-between">
                    <span className="rounded-full bg-white/20 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.25em]">
                      SDG {sdg.number}
                    </span>
                    <span className="text-2xl">{sdg.icon}</span>
                  </div>
                  <h4 className="mt-5 text-lg font-semibold">{sdg.title}</h4>
                  <p className="mt-2 text-sm leading-6 text-white/90">{sdg.description}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="grid gap-6 xl:grid-cols-2">
            {sectionConfig.map((section) => (
              <article key={section.key} className="rounded-[1.75rem] border border-slate-200/70 bg-white/80 p-6 shadow-[0_20px_55px_-25px_rgba(15,23,42,0.3)] backdrop-blur lg:p-7">
                <div className="mb-5 flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900">{section.title}</h3>
                    <p className="mt-1 text-sm text-slate-500">Planned events and milestones</p>
                  </div>
                  <div className="rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-sky-700">
                    {section.data.length} activities
                  </div>
                </div>
                <div className="space-y-3" role="list" aria-label={section.title}>
                  {section.data.map((item, index) => (
                    <div key={item.id} className="animate-[fadeInUp_0.6s_ease-out_both]" style={{ animationDelay: `${index * 100}ms` }}>
                      <YearPlanRow item={item} index={index} />
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
