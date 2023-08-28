import React, { useState } from 'react';
import generateSyntheticData from './syntheticDataGenerator';
import { saveAs } from 'file-saver';
import Papa from 'papaparse';

function App() {
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerateData = () => {
    setIsGenerating(true);
    const syntheticData = generateSyntheticData();
  
    const titlesCSV = Papa.unparse(syntheticData.titles);
    const creditsCSV = Papa.unparse(syntheticData.credits);
  
    const titlesBlob = new Blob([titlesCSV], { type: 'text/csv;charset=utf-8;' });
    const creditsBlob = new Blob([creditsCSV], { type: 'text/csv;charset=utf-8;' });
  
    saveAs(titlesBlob, 'titles.csv');
    saveAs(creditsBlob, 'credits.csv');
  
    setIsGenerating(false);
  };

  return (
    <div>
      <button onClick={handleGenerateData} disabled={isGenerating}>
        Generate Synthetic Data
      </button>
      {isGenerating && <p>Generating data...</p>}
    </div>
  );
}

export default App;
