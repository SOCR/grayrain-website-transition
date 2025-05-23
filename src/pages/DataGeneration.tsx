
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Download } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";

const DataGeneration = () => {
  // State for GR-EHR-Sim
  const [ehrGenerating, setEhrGenerating] = useState(false);
  const [ehrProgress, setEhrProgress] = useState(0);
  const [ehrDataReady, setEhrDataReady] = useState(false);

  // State for Synthea
  const [syntheaGenerating, setSyntheaGenerating] = useState(false);
  const [syntheaProgress, setSyntheaProgress] = useState(0);
  const [syntheaDataReady, setSyntheaDataReady] = useState(false);

  const form = useForm({
    defaultValues: {
      population: 100,
      state: "Michigan",
      city: "Ann Arbor",
      gender: "all",
      minAge: 0,
      maxAge: 100,
      includeConditions: true,
      includeMedications: true,
      includeAllergies: true,
      includeProcedures: true,
      seed: Math.floor(Math.random() * 1000000),
      exportFormat: "json"
    }
  });

  // Simulated GR-EHR-Sim generation
  const generateEhrData = () => {
    if (ehrGenerating) return;
    
    setEhrGenerating(true);
    setEhrProgress(0);
    setEhrDataReady(false);
    
    // Simulate generation with progress updates
    const interval = setInterval(() => {
      setEhrProgress(prev => {
        const newProgress = prev + 5;
        if (newProgress >= 100) {
          clearInterval(interval);
          setEhrGenerating(false);
          setEhrDataReady(true);
          toast({
            title: "Data Generation Complete",
            description: "GR-EHR-Sim data is ready for download.",
          });
          return 100;
        }
        return newProgress;
      });
    }, 300);
  };

  // Simulated download for GR-EHR-Sim
  const downloadEhrData = () => {
    // Create a sample JSON file for demonstration
    const sampleData = {
      patients: [
        { id: "p1", name: "John Doe", age: 45, gender: "M", conditions: ["Hypertension", "Type 2 Diabetes"] },
        { id: "p2", name: "Jane Smith", age: 32, gender: "F", conditions: ["Asthma"] },
        { id: "p3", name: "Robert Johnson", age: 67, gender: "M", conditions: ["Coronary Artery Disease", "COPD"] },
      ]
    };
    
    // Convert to downloadable blob
    const blob = new Blob([JSON.stringify(sampleData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    
    // Create download link and trigger click
    const a = document.createElement('a');
    a.href = url;
    a.download = 'gr-ehr-sim-data.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    toast({
      title: "Download Started",
      description: "Your GR-EHR-Sim data file is being downloaded.",
    });
  };

  // Simulated Synthea generation
  const onSyntheaGenerate = (data) => {
    if (syntheaGenerating) return;
    
    setSyntheaGenerating(true);
    setSyntheaProgress(0);
    setSyntheaDataReady(false);
    
    console.log("Synthea generator configuration:", data);
    
    // Simulate generation with progress updates
    const interval = setInterval(() => {
      setSyntheaProgress(prev => {
        const newProgress = prev + 2;
        if (newProgress >= 100) {
          clearInterval(interval);
          setSyntheaGenerating(false);
          setSyntheaDataReady(true);
          toast({
            title: "Synthea Generation Complete",
            description: `${data.population} synthetic patients have been generated.`,
          });
          return 100;
        }
        return newProgress;
      });
    }, 250);
  };

  // Simulated download for Synthea
  const downloadSyntheaData = () => {
    const format = form.getValues("exportFormat");
    
    // Sample data based on format
    let blob;
    let filename;
    
    if (format === "json") {
      const sampleData = {
        patients: [
          { id: "p1", name: "John Doe", birthdate: "1976-05-12", gender: "M", conditions: ["Hypertension", "Type 2 Diabetes"] },
          { id: "p2", name: "Jane Smith", birthdate: "1989-10-23", gender: "F", conditions: ["Asthma"] },
        ]
      };
      blob = new Blob([JSON.stringify(sampleData, null, 2)], { type: 'application/json' });
      filename = 'synthea-patients.json';
    } else {
      // CSV format
      const csvContent = `id,name,birthdate,gender,conditions
p1,John Doe,1976-05-12,M,"Hypertension, Type 2 Diabetes"
p2,Jane Smith,1989-10-23,F,Asthma`;
      blob = new Blob([csvContent], { type: 'text/csv' });
      filename = 'synthea-patients.csv';
    }
    
    // Create download link and trigger click
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    toast({
      title: "Download Started",
      description: `Your Synthea data file is being downloaded in ${format.toUpperCase()} format.`,
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="container mx-auto px-4 py-24 md:py-32">
        <div className="flex flex-col items-center">
          <h1 className="text-4xl font-bold text-center mb-2">Synthetic Data Generation</h1>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl">
            Generate realistic synthetic health data using different strategies and algorithms
          </p>

          <div className="w-full max-w-4xl">
            <Tabs defaultValue="gr-ehr-sim" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="gr-ehr-sim">GR-EHR-Sim</TabsTrigger>
                <TabsTrigger value="synthea">Synthea</TabsTrigger>
              </TabsList>
              
              {/* GR-EHR-Sim Tab */}
              <TabsContent value="gr-ehr-sim">
                <Card>
                  <CardHeader>
                    <CardTitle>GR-EHR-Sim Data Generator</CardTitle>
                    <CardDescription>
                      Generate synthetic EHR data using the GrayRain EHR simulator
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {ehrGenerating ? (
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>Generating data...</span>
                            <span>{ehrProgress}%</span>
                          </div>
                          <Progress value={ehrProgress} />
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Please wait while your synthetic data is being generated. This may take a few minutes.
                        </p>
                      </div>
                    ) : (
                      <div className="space-y-6">
                        <p className="text-sm text-muted-foreground">
                          Click the button below to start generating synthetic EHR data.
                        </p>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="text-sm font-medium">Number of Patients</label>
                            <Input type="number" defaultValue="50" className="mt-1" />
                          </div>
                          <div>
                            <label className="text-sm font-medium">Time Range (years)</label>
                            <Input type="number" defaultValue="5" className="mt-1" />
                          </div>
                        </div>
                      </div>
                    )}
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    {ehrDataReady ? (
                      <div className="flex w-full gap-4">
                        <Button 
                          variant="outline" 
                          className="w-1/2"
                          onClick={() => {
                            setEhrDataReady(false);
                            setEhrProgress(0);
                          }}
                        >
                          Reset
                        </Button>
                        <Button 
                          className="w-1/2"
                          onClick={downloadEhrData}
                        >
                          <Download className="mr-2 h-4 w-4" />
                          Download Data
                        </Button>
                      </div>
                    ) : (
                      <Button 
                        className="w-full" 
                        onClick={generateEhrData}
                        disabled={ehrGenerating}
                      >
                        {ehrGenerating ? "Generating..." : "Generate Data"}
                      </Button>
                    )}
                  </CardFooter>
                </Card>
              </TabsContent>
              
              {/* Synthea Tab */}
              <TabsContent value="synthea">
                <Card>
                  <CardHeader>
                    <CardTitle>Synthea Data Generator</CardTitle>
                    <CardDescription>
                      Generate synthetic patient data using the Synthea engine
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {syntheaGenerating ? (
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>Generating data...</span>
                            <span>{syntheaProgress}%</span>
                          </div>
                          <Progress value={syntheaProgress} />
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Please wait while your synthetic data is being generated. This may take several minutes for large populations.
                        </p>
                      </div>
                    ) : (
                      <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSyntheaGenerate)} className="space-y-6">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <FormField
                              control={form.control}
                              name="population"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Population Size</FormLabel>
                                  <FormControl>
                                    <Input type="number" {...field} onChange={e => field.onChange(parseInt(e.target.value) || 1)} />
                                  </FormControl>
                                  <FormDescription>
                                    Number of patients to generate
                                  </FormDescription>
                                </FormItem>
                              )}
                            />
                            
                            <FormField
                              control={form.control}
                              name="state"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>State</FormLabel>
                                  <FormControl>
                                    <Input {...field} />
                                  </FormControl>
                                </FormItem>
                              )}
                            />
                            
                            <FormField
                              control={form.control}
                              name="city"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>City</FormLabel>
                                  <FormControl>
                                    <Input {...field} />
                                  </FormControl>
                                </FormItem>
                              )}
                            />
                            
                            <FormField
                              control={form.control}
                              name="gender"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Gender Distribution</FormLabel>
                                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                      <SelectTrigger>
                                        <SelectValue placeholder="Select gender distribution" />
                                      </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                      <SelectItem value="all">All Genders</SelectItem>
                                      <SelectItem value="male">Male Only</SelectItem>
                                      <SelectItem value="female">Female Only</SelectItem>
                                    </SelectContent>
                                  </Select>
                                </FormItem>
                              )}
                            />
                            
                            <FormField
                              control={form.control}
                              name="seed"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Random Seed</FormLabel>
                                  <FormControl>
                                    <Input type="number" {...field} onChange={e => field.onChange(parseInt(e.target.value) || 0)} />
                                  </FormControl>
                                  <FormDescription>
                                    For reproducible results
                                  </FormDescription>
                                </FormItem>
                              )}
                            />
                            
                            <FormField
                              control={form.control}
                              name="exportFormat"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Export Format</FormLabel>
                                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                      <SelectTrigger>
                                        <SelectValue />
                                      </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                      <SelectItem value="json">JSON</SelectItem>
                                      <SelectItem value="csv">CSV</SelectItem>
                                    </SelectContent>
                                  </Select>
                                </FormItem>
                              )}
                            />
                          </div>
                          
                          <div>
                            <h3 className="text-lg font-medium mb-3">Age Range</h3>
                            <div className="grid grid-cols-2 gap-6">
                              <FormField
                                control={form.control}
                                name="minAge"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Minimum Age</FormLabel>
                                    <FormControl>
                                      <Input type="number" {...field} onChange={e => field.onChange(parseInt(e.target.value) || 0)} />
                                    </FormControl>
                                  </FormItem>
                                )}
                              />
                              
                              <FormField
                                control={form.control}
                                name="maxAge"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Maximum Age</FormLabel>
                                    <FormControl>
                                      <Input type="number" {...field} onChange={e => field.onChange(parseInt(e.target.value) || 0)} />
                                    </FormControl>
                                  </FormItem>
                                )}
                              />
                            </div>
                          </div>
                          
                          <div>
                            <h3 className="text-lg font-medium mb-3">Data Types to Include</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              <FormField
                                control={form.control}
                                name="includeConditions"
                                render={({ field }) => (
                                  <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                                    <div className="space-y-0.5">
                                      <FormLabel className="text-base">
                                        Medical Conditions
                                      </FormLabel>
                                      <FormDescription>
                                        Generate conditions and diagnoses
                                      </FormDescription>
                                    </div>
                                    <FormControl>
                                      <Switch
                                        checked={field.value}
                                        onCheckedChange={field.onChange}
                                      />
                                    </FormControl>
                                  </FormItem>
                                )}
                              />
                              
                              <FormField
                                control={form.control}
                                name="includeMedications"
                                render={({ field }) => (
                                  <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                                    <div className="space-y-0.5">
                                      <FormLabel className="text-base">
                                        Medications
                                      </FormLabel>
                                      <FormDescription>
                                        Generate medication records
                                      </FormDescription>
                                    </div>
                                    <FormControl>
                                      <Switch
                                        checked={field.value}
                                        onCheckedChange={field.onChange}
                                      />
                                    </FormControl>
                                  </FormItem>
                                )}
                              />
                              
                              <FormField
                                control={form.control}
                                name="includeProcedures"
                                render={({ field }) => (
                                  <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                                    <div className="space-y-0.5">
                                      <FormLabel className="text-base">
                                        Procedures
                                      </FormLabel>
                                      <FormDescription>
                                        Generate procedure records
                                      </FormDescription>
                                    </div>
                                    <FormControl>
                                      <Switch
                                        checked={field.value}
                                        onCheckedChange={field.onChange}
                                      />
                                    </FormControl>
                                  </FormItem>
                                )}
                              />
                              
                              <FormField
                                control={form.control}
                                name="includeAllergies"
                                render={({ field }) => (
                                  <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                                    <div className="space-y-0.5">
                                      <FormLabel className="text-base">
                                        Allergies
                                      </FormLabel>
                                      <FormDescription>
                                        Generate allergy records
                                      </FormDescription>
                                    </div>
                                    <FormControl>
                                      <Switch
                                        checked={field.value}
                                        onCheckedChange={field.onChange}
                                      />
                                    </FormControl>
                                  </FormItem>
                                )}
                              />
                            </div>
                          </div>
                          
                          {!syntheaDataReady && (
                            <Button type="submit" className="w-full" disabled={syntheaGenerating}>
                              {syntheaGenerating ? "Generating..." : "Generate Synthea Data"}
                            </Button>
                          )}
                        </form>
                      </Form>
                    )}
                  </CardContent>
                  {syntheaDataReady && (
                    <CardFooter>
                      <div className="flex w-full gap-4">
                        <Button 
                          variant="outline" 
                          className="w-1/2"
                          onClick={() => {
                            setSyntheaDataReady(false);
                            setSyntheaProgress(0);
                          }}
                        >
                          Reset
                        </Button>
                        <Button 
                          className="w-1/2"
                          onClick={downloadSyntheaData}
                        >
                          <Download className="mr-2 h-4 w-4" />
                          Download Synthea Data
                        </Button>
                      </div>
                    </CardFooter>
                  )}
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DataGeneration;
