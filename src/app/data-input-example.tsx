"use client"

import { useState } from "react";
import { DataInput, DataSchema } from "@integration-app/react";

export function DataInputExample() {
  const [value, setValue] = useState<unknown>({})

  const schema = {
    type: 'object',
    properties: {
      String: {
        type: 'string',
        format: 'hostname',
      },
      Integer: {
        type: 'integer',
      },
      Boolean: {
        type: 'boolean',
      },
      Object: {
        type: 'object',
        required: ['String'],
        properties: {
          NoType: {
            title: 'No Type Title',
          },
          String: {
            type: 'string',
          },
          Object: {
            type: 'object',
            properties: {
              String: {
                type: 'string',
              },
            },
          },
        },
      },
    },
    required: ['String', 'Boolean'],
  }

  const variablesSchema: DataSchema = {
    type: 'object',
    properties: {
      'string-value': {
        type: 'string',
        title: 'String Value',
      },
      'array-value': {
        type: 'array',
        title: 'Array Value',
        items: {
          type: 'string',
        },
      },
      numberOfEmployees: {
        type: 'number',
      },
      currentWeekNumber: {
        type: 'integer',
      },
      createdTime: {
        type: 'string',
        format: 'date-time',
      },
    },
  }

  return (
    <DataInput
      schema={schema}
      value={value}
      variablesSchema={variablesSchema}
      onChange={(importValue: unknown) => setValue(importValue)}
    />
  )
}