

import pandas as pd
import numpy as np
from sklearn.linear_model import LinearRegression
from sklearn.metrics import r2_score
import json
from datetime import datetime
import matplotlib.pyplot as plt
import seaborn as sns


company_data = {
    "companies": [
        {
            "name": "DeepMind Aurora",
            "historicSales": [
                {"month": "Nov 2022", "revenue": "₹42,000"},
                {"month": "Dec 2022", "revenue": "₹45,000"},
                {"month": "Jan 2023", "revenue": "₹48,000"},
                {"month": "Feb 2023", "revenue": "₹50,000"},
                {"month": "Mar 2023", "revenue": "₹52,000"},
                {"month": "Apr 2023", "revenue": "₹54,000"},
                {"month": "May 2023", "revenue": "₹55,000"},
                {"month": "Jun 2023", "revenue": "₹58,000"},
                {"month": "Jul 2023", "revenue": "₹60,000"},
                {"month": "Aug 2023", "revenue": "₹62,000"},
                {"month": "Sep 2023", "revenue": "₹65,000"},
                {"month": "Oct 2023", "revenue": "₹68,000"},
                {"month": "Nov 2023", "revenue": "₹70,000"},
                {"month": "Dec 2023", "revenue": "₹72,000"},
                {"month": "Jan 2024", "revenue": "₹75,000"},
                {"month": "Feb 2024", "revenue": "₹78,000"},
                {"month": "Mar 2024", "revenue": "₹80,000"},
                {"month": "Apr 2024", "revenue": "₹82,000"},
                {"month": "May 2024", "revenue": "₹85,000"},
                {"month": "Jun 2024", "revenue": "₹88,000"},
                {"month": "Jul 2024", "revenue": "₹90,000"},
                {"month": "Aug 2024", "revenue": "₹92,000"},
                {"month": "Sep 2024", "revenue": "₹95,000"},
                {"month": "Oct 2024", "revenue": "₹98,000"}
            ]
        },
        {
            "name": "IonQ Systems",
            "historicSales": [
                {"month": "Nov 2022", "revenue": "₹82,000"},
                {"month": "Dec 2022", "revenue": "₹85,000"},
                {"month": "Jan 2023", "revenue": "₹88,000"},
                {"month": "Feb 2023", "revenue": "₹90,000"},
                {"month": "Mar 2023", "revenue": "₹92,000"},
                {"month": "Apr 2023", "revenue": "₹95,000"},
                {"month": "May 2023", "revenue": "₹98,000"},
                {"month": "Jun 2023", "revenue": "₹100,000"},
                {"month": "Jul 2023", "revenue": "₹102,000"},
                {"month": "Aug 2023", "revenue": "₹105,000"},
                {"month": "Sep 2023", "revenue": "₹108,000"},
                {"month": "Oct 2023", "revenue": "₹110,000"},
                {"month": "Nov 2023", "revenue": "₹112,000"},
                {"month": "Dec 2023", "revenue": "₹115,000"},
                {"month": "Jan 2024", "revenue": "₹118,000"},
                {"month": "Feb 2024", "revenue": "₹120,000"},
                {"month": "Mar 2024", "revenue": "₹122,000"},
                {"month": "Apr 2024", "revenue": "₹125,000"},
                {"month": "May 2024", "revenue": "₹128,000"},
                {"month": "Jun 2024", "revenue": "₹130,000"},
                {"month": "Jul 2024", "revenue": "₹132,000"},
                {"month": "Aug 2024", "revenue": "₹135,000"},
                {"month": "Sep 2024", "revenue": "₹138,000"},
                {"month": "Oct 2024", "revenue": "₹140,000"}
            ]
        },
        {
            "name": "Polygon Labs",
            "historicSales": [
                {"month": "Nov 2022", "revenue": "₹62,000"},
                {"month": "Dec 2022", "revenue": "₹65,000"},
                {"month": "Jan 2023", "revenue": "₹68,000"},
                {"month": "Feb 2023", "revenue": "₹70,000"},
                {"month": "Mar 2023", "revenue": "₹72,000"},
                {"month": "Apr 2023", "revenue": "₹75,000"},
                {"month": "May 2023", "revenue": "₹78,000"},
                {"month": "Jun 2023", "revenue": "₹80,000"},
                {"month": "Jul 2023", "revenue": "₹82,000"},
                {"month": "Aug 2023", "revenue": "₹85,000"},
                {"month": "Sep 2023", "revenue": "₹88,000"},
                {"month": "Oct 2023", "revenue": "₹90,000"},
                {"month": "Nov 2023", "revenue": "₹92,000"},
                {"month": "Dec 2023", "revenue": "₹95,000"},
                {"month": "Jan 2024", "revenue": "₹98,000"},
                {"month": "Feb 2024", "revenue": "₹100,000"},
                {"month": "Mar 2024", "revenue": "₹102,000"},
                {"month": "Apr 2024", "revenue": "₹105,000"},
                {"month": "May 2024", "revenue": "₹108,000"},
                {"month": "Jun 2024", "revenue": "₹110,000"},
                {"month": "Jul 2024", "revenue": "₹112,000"},
                {"month": "Aug 2024", "revenue": "₹115,000"},
                {"month": "Sep 2024", "revenue": "₹118,000"},
                {"month": "Oct 2024", "revenue": "₹120,000"}
            ]
        },
        {
            "name": "Intuitive Surgical",
            "historicSales": [
                {"month": "Nov 2022", "revenue": "₹120,000"},
                {"month": "Dec 2022", "revenue": "₹125,000"},
                {"month": "Jan 2023", "revenue": "₹128,000"},
                {"month": "Feb 2023", "revenue": "₹130,000"},
                {"month": "Mar 2023", "revenue": "₹135,000"},
                {"month": "Apr 2023", "revenue": "₹138,000"},
                {"month": "May 2023", "revenue": "₹140,000"},
                {"month": "Jun 2023", "revenue": "₹142,000"},
                {"month": "Jul 2023", "revenue": "₹145,000"},
                {"month": "Aug 2023", "revenue": "₹148,000"},
                {"month": "Sep 2023", "revenue": "₹150,000"},
                {"month": "Oct 2023", "revenue": "₹152,000"},
                {"month": "Nov 2023", "revenue": "₹155,000"},
                {"month": "Dec 2023", "revenue": "₹158,000"},
                {"month": "Jan 2024", "revenue": "₹160,000"},
                {"month": "Feb 2024", "revenue": "₹162,000"},
                {"month": "Mar 2024", "revenue": "₹165,000"},
                {"month": "Apr 2024", "revenue": "₹168,000"},
                {"month": "May 2024", "revenue": "₹170,000"},
                {"month": "Jun 2024", "revenue": "₹172,000"},
                {"month": "Jul 2024", "revenue": "₹175,000"},
                {"month": "Aug 2024", "revenue": "₹178,000"},
                {"month": "Sep 2024", "revenue": "₹180,000"},
                {"month": "Oct 2024", "revenue": "₹182,000"}
            ]
        },
        {
            "name": "Moderna Tech",
            "historicSales": [
                {"month": "Nov 2022", "revenue": "₹180,000"},
                {"month": "Dec 2022", "revenue": "₹185,000"},
                {"month": "Jan 2023", "revenue": "₹188,000"},
                {"month": "Feb 2023", "revenue": "₹190,000"},
                {"month": "Mar 2023", "revenue": "₹192,000"},
                {"month": "Apr 2023", "revenue": "₹195,000"},
                {"month": "May 2023", "revenue": "₹198,000"},
                {"month": "Jun 2023", "revenue": "₹200,000"},
                {"month": "Jul 2023", "revenue": "₹202,000"},
                {"month": "Aug 2023", "revenue": "₹205,000"},
                {"month": "Sep 2023", "revenue": "₹208,000"},
                {"month": "Oct 2023", "revenue": "₹210,000"},
                {"month": "Nov 2023", "revenue": "₹212,000"},
                {"month": "Dec 2023", "revenue": "₹215,000"},
                {"month": "Jan 2024", "revenue": "₹218,000"},
                {"month": "Feb 2024", "revenue": "₹220,000"},
                {"month": "Mar 2024", "revenue": "₹222,000"},
                {"month": "Apr 2024", "revenue": "₹225,000"},
                {"month": "May 2024", "revenue": "₹228,000"},
                {"month": "Jun 2024", "revenue": "₹230,000"},
                {"month": "Jul 2024", "revenue": "₹232,000"},
                {"month": "Aug 2024", "revenue": "₹235,000"},
                {"month": "Sep 2024", "revenue": "₹238,000"},
                {"month": "Oct 2024", "revenue": "₹240,000"}
            ]
        },
        {
            "name": "Fitbit Care",
            "historicSales": [
                {"month": "Nov 2022", "revenue": "₹22,000"},
                {"month": "Dec 2022", "revenue": "₹25,000"},
                {"month": "Jan 2023", "revenue": "₹28,000"},
                {"month": "Feb 2023", "revenue": "₹30,000"},
                {"month": "Mar 2023", "revenue": "₹32,000"},
                {"month": "Apr 2023", "revenue": "₹35,000"},
                {"month": "May 2023", "revenue": "₹38,000"},
                {"month": "Jun 2023", "revenue": "₹40,000"},
                {"month": "Jul 2023", "revenue": "₹42,000"},
                {"month": "Aug 2023", "revenue": "₹45,000"},
                {"month": "Sep 2023", "revenue": "₹48,000"},
                {"month": "Oct 2023", "revenue": "₹50,000"},
                {"month": "Nov 2023", "revenue": "₹52,000"},
                {"month": "Dec 2023", "revenue": "₹55,000"},
                {"month": "Jan 2024", "revenue": "₹58,000"},
                {"month": "Feb 2024", "revenue": "₹60,000"},
                {"month": "Mar 2024", "revenue": "₹62,000"},
                {"month": "Apr 2024", "revenue": "₹65,000"},
                {"month": "May 2024", "revenue": "₹68,000"},
                {"month": "Jun 2024", "revenue": "₹70,000"},
                {"month": "Jul 2024", "revenue": "₹72,000"},
                {"month": "Aug 2024", "revenue": "₹75,000"},
                {"month": "Sep 2024", "revenue": "₹78,000"},
                {"month": "Oct 2024", "revenue": "₹80,000"}
            ]
        }
    ]
}

class SalesPredictor:
    def __init__(self):
        self.model = LinearRegression()
    
    def prepare_data(self, sales_data):
        """Convert sales data to numerical format."""
        df = pd.DataFrame(sales_data)
        df['revenue'] = df['revenue'].str.replace('₹', '').str.replace(',', '').astype(float)
        df['month'] = pd.to_datetime(df['month'], format='%b %Y')
        df['months_from_start'] = (df['month'] - df['month'].min()).dt.total_seconds() / (30 * 24 * 60 * 60)
        return df
    
    def calculate_metrics(self, company_data):
        """Calculate success metrics for a company."""
        df = self.prepare_data(company_data['historicSales'])
        
        # Calculate growth metrics
        total_growth = (df['revenue'].iloc[-1] - df['revenue'].iloc[0]) / df['revenue'].iloc[0] * 100
        avg_monthly_growth = df['revenue'].pct_change().mean() * 100
        
        # Fit linear regression
        X = df['months_from_start'].values.reshape(-1, 1)
        y = df['revenue'].values
        self.model.fit(X, y)
        
        # Calculate R-squared
        y_pred = self.model.predict(X)
        r2 = r2_score(y, y_pred)
        
        # Predict next 3 months
        future_months = np.array([[df['months_from_start'].max() + i] for i in range(1, 4)])
        future_predictions = self.model.predict(future_months)
        
        # Calculate success score
        growth_score = min(100, max(0, total_growth))
        consistency_score = r2 * 100
        trend_score = min(100, max(0, avg_monthly_growth * 2))
        
        success_score = (
            growth_score * 0.3 +
            consistency_score * 0.3 +
            trend_score * 0.4
        )
        
        return {
            'company_name': company_data['name'],
            'success_score': round(success_score, 2),
            'metrics': {
                'total_growth_percent': round(total_growth, 2),
                'avg_monthly_growth_percent': round(avg_monthly_growth, 2),
                'trend_reliability': round(r2 * 100, 2),
                'latest_revenue': float(df['revenue'].iloc[-1]),
                'predicted_next_3_months': [round(x, 2) for x in future_predictions]
            }
        }

def main():
    # Initialize predictor
    predictor = SalesPredictor()
    results = []

    # Calculate metrics for each company
    for company in company_data['companies']:
        result = predictor.calculate_metrics(company)
        results.append(result)
        
        # Print results to console
        print(f"\nCompany: {result['company_name']}")
        print(f"Success Score: {result['success_score']}%")
        print("\nMetrics:")
        print(f"- Total Growth: {result['metrics']['total_growth_percent']}%")
        print(f"- Avg Monthly Growth: {result['metrics']['avg_monthly_growth_percent']}%")
        print(f"- Trend Reliability: {result['metrics']['trend_reliability']}%")
        print(f"- Latest Revenue: ₹{result['metrics']['latest_revenue']:,.2f}")
        print("- Next 3 Months Prediction: ₹" + ", ₹".join(f"{x:,.2f}" for x in result['metrics']['predicted_next_3_months']))

    # Save results to JSON file
    with open('predictions.json', 'w') as f:
        json.dump(results, f, indent=4)

    # Create visualization
    plt.figure(figsize=(12, 6))
    companies = [r['company_name'] for r in results]
    scores = [r['success_score'] for r in results]

    plt.bar(companies, scores)
    plt.title('Company Success Scores')
    plt.xticks(rotation=45)
    plt.ylabel('Success Score (%)')
    plt.tight_layout()
    plt.savefig('success_scores.png')
    plt.close()

if __name__ == "__main__":
    main()