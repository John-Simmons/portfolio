import React from 'react';
import PortfolioItem from "../PortfolioItem/PortfolioItem"
import '../PortfolioItem/PortfolioItem.css'
import PortfolioItemRight from "../PortfolioItemRight/PortfolioItemRight"
import '../PortfolioItemRight/PortfolioItemRight.css'

const portfolioList = (props) => {
  let portfolioList = null;

  portfolioList=(
    <div>
      <PortfolioItem
        title="Making Insights Actionable"
        company="Persado"
        role="Product Designer"
        description="Persado heard from its users that their langauge insights weren't actionable so we conducted research to understand what it means to be actionable. Our team then designed and built a new feature to help users better understand and utilize results from their marketing experiments and tests."
        locked={true}
        route="/case-study"/>

      <PortfolioItem
        title="Building Better Products with Daniel Kahneman"
        company="Article"
        role="Product Design"
        description="How do we compare two different user journeys? How do we determine if a user journey is good or bad? Daniel Kahneman may give us some answers with his research into how humans look back on painful experiences."
        locked={true}
        route="/case-study"/>

      <PortfolioItem
        title="Expanding into Self-Service"
        company="Persado"
        role="Product Designer"
        description="Persado has historically been an enterprise level B2B company. However, with advancements in NLG like GPT-3 the opportunity to expand into lower markets emerged. We built a brand new self-service product that could utilize these models to improve marketing performance for a new set of customers."
        locked={true}
        route="/case-study"/>

      <PortfolioItem
        title="Reducing the Risk of Third-Party Software"
        company="J.P. Morgan"
        role="Product Designer"
        description="Using third-party software is a necessary part of any technology business. But when do the risks of using third-party software become too high? And how can we create a structured plan to reduce those risks through internally built software?"
        locked={true}
        route="/case-study"/>
    </div>
  );

  return (
    <div className="PortfolioList">
      {portfolioList}
    </div>
  )
}


export default portfolioList;
