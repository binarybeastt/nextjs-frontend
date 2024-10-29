'use client';
import { useState } from 'react';
import axiosInstance from '../utils/axiosInstance';

export default function InterviewPrepPage() {
  const [jobTitle, setJobTitle] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [interviewDate, setInterviewDate] = useState('');
  const [resume, setResume] = useState('');
  const [questionsAnswers, setQuestionsAnswers] = useState(null);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post('/interview-prep', {
        job_title: jobTitle,
        job_description: jobDescription,
        interview_date: interviewDate,
        resume,
      });
      setQuestionsAnswers(response.data.questions_answers);
    } catch (err) {
      console.error('Error during interview preparation:', err);
      setError('Failed to generate interview preparation data.');
    }
  };

  return (
    <div>
      <h1>Interview Preparation</h1>
      {error && <p className="text-red-500">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label>Job Title</label>
          <input
            type="text"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
            className="border p-2 rounded w-full"
            required
          />
        </div>
        <div>
          <label>Job Description</label>
          <textarea
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
            className="border p-2 rounded w-full"
            required
          />
        </div>
        <div>
          <label>Interview Date</label>
          <input
            type="date"
            value={interviewDate}
            onChange={(e) => setInterviewDate(e.target.value)}
            className="border p-2 rounded w-full"
            required
          />
        </div>
        <div>
          <label>Resume</label>
          <textarea
            value={resume}
            onChange={(e) => setResume(e.target.value)}
            className="border p-2 rounded w-full"
            required
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Prepare for Interview
        </button>
      </form>
      
      {questionsAnswers && (
        <div className="mt-8">
          <h2>Interview Questions and Answers</h2>
          <pre className="bg-gray-100 p-4 rounded">{JSON.stringify(questionsAnswers, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}
