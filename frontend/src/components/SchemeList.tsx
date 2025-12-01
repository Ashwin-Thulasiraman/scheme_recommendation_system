import React from "react";
import SchemeCard from "./SchemeCard";
import "./SchemeList.css";

interface Scheme {
  id: string;
  name: string;
  description: string;
  category: string;
  eligibility: string[];
  benefits?: string[];
}

interface SchemeListProps {
  schemes: Scheme[];
  loading?: boolean;
  error?: string | null;
}

const SchemeList: React.FC<SchemeListProps> = ({ schemes, loading, error }) => {
  if (loading) {
    return <p className="schemelist-loading">Fetching schemes...</p>;
  }

  if (error) {
    return <p className="schemelist-error">{error}</p>;
  }

  if (schemes.length === 0) {
    return <p className="schemelist-empty">No schemes found. Try adjusting filters.</p>;
  }

  return (
    <div className="schemelist-container">
      {schemes.map((scheme) => (
        <SchemeCard
  key={scheme.id}
  name={scheme.name}
  description={scheme.description}
  eligibility={scheme.eligibility}
benefits={scheme.benefits || []}
/>

      ))}
    </div>
  );
};

export default SchemeList;
