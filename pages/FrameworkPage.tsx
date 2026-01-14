import React from 'react';
import { Header } from '../components/Header';
import { Section } from '../components/Section';
import { NodeCard } from '../components/NodeCard';
import { InteractiveFormulaBlock } from '../components/InteractiveFormulaBlock';
import { PhaseStep } from '../components/PhaseStep';
import { ValueCard } from '../components/ValueCard';
import { FlowDiagram } from '../components/FlowDiagram';
import { ScrollReveal } from '../components/ScrollReveal';

// Define a type for a single framework (kept from original)
interface Framework {
  id: string;
  name: string;
  subject: string;
  description: string;
  summary: { p1: string; p2: string; directive: string; };
  isomorphism: { intro: string; };
  nodes: any[];
  solution: { intro: string; path: string[]; reasons: any[]; };
  formulas: { intro: string; items: any[]; };
  protocol: { intro: string; phases: any[]; };
  values: { intro: string; points: any[]; };
}

interface FrameworkPageProps {
  framework: Framework;
}

const FrameworkPage: React.FC<FrameworkPageProps> = ({ framework }) => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <ScrollReveal>
        <Header title={framework.name} subject={framework.subject} />
      </ScrollReveal>

      <Section title="1. Executive Summary" id="summary">
        <ScrollReveal>
          <p className="text-lg leading-relaxed">{framework.summary.p1}</p>
          <p className="mt-4 text-lg leading-relaxed">{framework.summary.p2}</p>
          <div className="mt-6 border-l-4 border-cyan-400 pl-4 bg-gray-800/30 p-4 rounded-r-lg">
            <p className="text-xl font-semibold italic text-white">"{framework.summary.directive}"</p>
          </div>
        </ScrollReveal>
      </Section>

      <Section title="2. The Isomorphism" id="isomorphism">
        <ScrollReveal>
          <p className="text-lg mb-8">{framework.isomorphism.intro}</p>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {framework.nodes.map((node, index) => (
            <ScrollReveal key={node.id} delay={index * 0.1}>
              <NodeCard {...node} />
            </ScrollReveal>
          ))}
        </div>
      </Section>

      <Section title="3. The Solution: The Prime Permutation" id="solution">
        <ScrollReveal>
          <p className="text-lg mb-8">{framework.solution.intro}</p>
        </ScrollReveal>
        <ScrollReveal>
          <FlowDiagram path={framework.solution.path} />
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <div className="mt-8 bg-gray-800/50 rounded-lg p-6 border border-gray-700">
            <h3 className="text-xl font-bold text-white mb-4">Why this is the Shortest Path:</h3>
            <ul className="space-y-4">
              {framework.solution.reasons.map((reason, index) => (
                <li key={index} className="flex items-start">
                  <svg className="w-5 h-5 mr-3 mt-1 text-cyan-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                  <span className="text-gray-300"><span className="font-semibold text-white">{reason.title}:</span> {reason.description}</span>
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>
      </Section>

      <Section title="4. The Mathematical Engine" id="formulas">
        <ScrollReveal>
          <p className="text-lg mb-8">{framework.formulas.intro}</p>
        </ScrollReveal>
        <div className="space-y-8">
          {framework.formulas.items.map((formula, index) => (
            <ScrollReveal key={formula.title} delay={index * 0.1}>
              <InteractiveFormulaBlock {...formula} />
            </ScrollReveal>
          ))}
        </div>
      </Section>

      <Section title="5. Operational Implementation Protocol" id="protocol">
        <div className="relative border-l-2 border-gray-700 ml-4 pl-8 space-y-12">
          {framework.protocol.phases.map((phase, index) => (
            <PhaseStep key={phase.title} isLast={index === framework.protocol.phases.length - 1} {...phase} index={index} />
          ))}
        </div>
      </Section>

      <Section title="6. The Humane Perspective" id="values">
          <ScrollReveal>
            <p className="text-lg mb-8">{framework.values.intro}</p>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {framework.values.points.map((point, index) => (
              <ScrollReveal key={point.title} delay={index * 0.15}>
                <ValueCard {...point} />
              </ScrollReveal>
            ))}
          </div>
      </Section>
    </div>
  );
};

export default FrameworkPage;