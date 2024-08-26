'use client'
import React, { useState, FormEvent, ChangeEvent, useEffect } from 'react';
import { useRouter } from 'next/router';
import { cn } from '../../lib/utils';
import { Label } from './ui/label';
import { Input } from './ui/input';


interface BudgetAllocation {
  p1: string;
  p2: string;
  p3: string;
  p4: string;
  p5: string;
}

interface BusinessIdea {
  title: string;
  description: string;
  budget_allocation: BudgetAllocation;
  profit_margin: string;
  potential: string;
  government_scheme: string;
}

interface IdeasData {
  business_ideas: BusinessIdea[];
}

interface ResponseData {
  message: string;
  ideas: IdeasData;
}



  
const ExtractInfo: React.FC = () => {

    const router = useRouter();
    useEffect(() => {
      const token = localStorage.getItem('token');
      if (!token) {
        router.push('/signin');
      }
    }, [router]);
  const [fetchedData, setFetchedData] = useState<ResponseData | null>(null);
  const [budget, setBudget] = useState<string>('');
  const [location, setLocation] = useState<string>('');
  const [language, setLanguage] = useState<string>('');
  const [loading, setLoading] = useState(false);


  const handleSignIn = async (e: FormEvent) => {
    setLoading(true)
    e.preventDefault();
    const response = await fetch('http://localhost:2000/form/ideas', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        budget: budget,
        location: location,
        language: language,
      }),
    });

    if (response.ok) {
        const data = await response.json();
        setLoading(false)
        setFetchedData(data);
        console.log(data)
      } else {
        alert('Invalid phone number or password');
      }
    };

  const handleChange = (setter: React.Dispatch<React.SetStateAction<string>>) => (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    setter(e.target.value);
  };

  return(
    <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input dark:bg-black mt-[150px]">
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
        It's Your Money, Make it Large!
      </h2>

      <form className="my-8" onSubmit={handleSignIn}>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="budget">Your Budget</Label>
            <Input id="budget" placeholder="2000" type="text" value={budget} onChange={handleChange(setBudget)} />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="location">Location</Label>
          <Input id="location" placeholder="OakLodge Compound, Mallital, Nainital" type="text" value={location} onChange={handleChange(setLocation)} />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="language">Language</Label>
          <Input id="language" placeholder="Hindi" type="text" value={language} onChange={handleChange(setLanguage)} />
        </LabelInputContainer>

        <button
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
          {loading ? 'Generating...' : 'Generate'} &rarr;
          <BottomGradient />
        </button>
      </form>
      {fetchedData && fetchedData.ideas && fetchedData.ideas.business_ideas && (
   <div className="p-8 bg-slate-600 w-[748px]">
   <h1 className="text-2xl font-bold mb-6">Business Ideas</h1>
   {fetchedData.ideas.business_ideas.map((idea, index) => (
     <div key={index} className="mb-8 p-4 border rounded-lg shadow w-[100%] overflow-auto">
       <h2 className="text-xl font-semibold mb-2">{idea.title}</h2>
       <p className="mb-2"><strong>Description:</strong> {idea.description}</p>
       <div className="mb-2">
         <strong>Budget Allocation:</strong>
         <ul className="list-disc ml-6">
           <li>{idea.budget_allocation.p1}</li>
           <li>{idea.budget_allocation.p2}</li>
           <li>{idea.budget_allocation.p3}</li>
           <li>{idea.budget_allocation.p4}</li>
           <li>{idea.budget_allocation.p5}</li>
         </ul>
       </div>
       <p className="mb-2"><strong>Profit Margin:</strong> {idea.profit_margin}</p>
       <p className="mb-2"><strong>Potential:</strong> {idea.potential}</p>
       <p><strong>Government Scheme:</strong> {idea.government_scheme}</p>
     </div>
   ))}
 </div>
)}
  </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
export default ExtractInfo