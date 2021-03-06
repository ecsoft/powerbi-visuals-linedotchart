/*
 *  Power BI Visualizations
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved. 
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *   
 *  The above copyright notice and this permission notice shall be included in 
 *  all copies or substantial portions of the Software.
 *   
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR 
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, 
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE 
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER 
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */

module powerbi.extensibility.visual {
    import SelectableDataPoint = powerbi.extensibility.utils.interactivity.SelectableDataPoint;
    import IInteractivityService = powerbi.extensibility.utils.interactivity.IInteractivityService;
    import IAxisProperties = powerbi.extensibility.utils.chart.axis.IAxisProperties;
    import IValueFormatter = powerbi.extensibility.utils.formatting.IValueFormatter;

    export class DateValue {
        label: string;
        value: number;

        constructor(label: string, value: number) {
            this.label = label;
            this.value = value;
        }
    }

    export interface LineDotPoint extends SelectableDataPoint {
        dateValue: DateValue;
        value: number;
        dot: number;
        sum: number;
        highlight?: boolean;
        opacity: number;
        counter: any;
    }

    export interface Legend {
        text: string;
        transform?: string;
        dx?: string;
        dy?: string;
    }

    export interface ColumnNames {
        category: string;
        values: string;
    }

    export interface LineDotChartViewModel {
        columnNames: ColumnNames;
        dotPoints: LineDotPoint[];
        settings: LineDotChartSettings;
        dateMetadataColumn: DataViewMetadataColumn;
        valuesMetadataColumn: DataViewMetadataColumn;
        dateColumnFormatter: IValueFormatter;
        dataValueFormatter: IValueFormatter;
        dateValues: DateValue[];
        isOrdinal: boolean;
        yMinValue: number;
        yMaxValue: number;
        sumOfValues: number;
        hasHighlights: boolean;
    }

    export interface MinMaxValue {
        min: number;
        max: number;
    }

    export interface LineDotChartDefaultSettingsRange {
        dotSize: MinMaxValue;
        lineThickness: MinMaxValue;
        animationDuration: MinMaxValue;
    }
}


