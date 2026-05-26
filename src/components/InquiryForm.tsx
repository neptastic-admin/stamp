"use client";

import React, { useState, useRef } from "react";
import { Upload, CheckCircle2, ShieldCheck, MailOpen, PhoneIncoming, AlertCircle, FileText } from "lucide-react";
import { BUSINESS_INFO } from "../data";

export default function InquiryForm() {
  const [formData, setFormData] = useState({
    clientName: "",
    contactNumber: "",
    stampCategory: "GST Stamp",
    designInstructions: "",
  });

  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [isDragActive, setIsDragActive] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Drag and Drop support matching required Usability patterns
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragActive(true);
  };

  const handleDragLeave = () => {
    setIsDragActive(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      setUploadedFile(file);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setUploadedFile(e.target.files[0]);
    }
  };

  const triggerFileSelect = () => {
    fileInputRef.current?.click();
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (!formData.clientName.trim()) {
      setErrorMessage("Please enter your name.");
      return;
    }
    if (!formData.contactNumber.trim() || formData.contactNumber.length < 10) {
      setErrorMessage("Please enter a valid 10-digit mobile number.");
      return;
    }

    setSubmitSuccess(true);
  };

  const getUrgentWhatsAppUrl = () => {
    const fileText = uploadedFile ? `\n- Reference File Attached: ${uploadedFile.name}` : "";
    const detailString = `URGENT INQUIRY:\n- Client Name: ${formData.clientName}\n- Contact: ${formData.contactNumber}\n- Stamp Required: ${formData.stampCategory}\n- Instructions: ${formData.designInstructions}${fileText}`;
    return `https://wa.me/919267900106?text=${encodeURIComponent(detailString)}`;
  };

  return (
    <section id="inquiry" className="py-20 relative bg-indigo-950 text-white overflow-hidden">
      {/* Decorative dark stamp branding overlays */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,#be123c_0%,transparent_50%)] opacity-20" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,#1d4ed8_0%,transparent_50%)] opacity-25" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left panel: Info */}
          <div className="lg:col-span-5 space-y-6">
            <span className="bg-rose-500/20 text-rose-300 font-mono text-xs tracking-widest px-3 py-1.5 rounded-full uppercase font-medium border border-rose-500/30">
              Instant Design Support
            </span>
            <h3 className="font-sans font-extrabold text-3xl sm:text-4xl leading-tight tracking-tight">
              Ready to Stamp? Submit Your Layout Requirements
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Have unique specifications or signature layouts? Fill out our express order routing form. Our physical workshop team next to Ace Divino will render and package your stamps in under 3 hours!
            </p>

            <div className="space-y-4 pt-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-rose-400 shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="font-sans font-semibold text-white text-sm">Legal Layout Double Check</h5>
                  <p className="text-slate-300 text-xs">We verify spelling and Indian tax office formats before laser-etching.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-rose-400 shrink-0">
                  <PhoneIncoming className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="font-sans font-semibold text-white text-sm">15-Min Agent Callbacks</h5>
                  <p className="text-slate-300 text-xs">Fill details and receive a direct digital layout template preview on your phone.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right panel: Form Card */}
          <div className="lg:col-span-7">
            <div className="bg-white text-slate-900 rounded-3xl p-6 sm:p-10 shadow-2xl border border-slate-100">
              
              {!submitSuccess ? (
                <form onSubmit={handleFormSubmit} className="space-y-5">
                  <div className="border-b border-slate-100 pb-4 mb-2">
                    <h4 className="font-sans font-extrabold text-lg sm:text-xl text-indigo-950">
                      Express Direct Quote Router
                    </h4>
                    <p className="text-slate-500 text-xs mt-1">
                      No payment necessary. Layout proof generation is completely complimentary.
                    </p>
                  </div>

                  {errorMessage && (
                    <div className="bg-rose-50 text-rose-600 text-xs p-3.5 rounded-xl flex items-center gap-2.5 font-medium border border-rose-100">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 mb-1.5 uppercase tracking-wide">Your Full Name</label>
                      <input
                        type="text"
                        name="clientName"
                        value={formData.clientName}
                        onChange={handleInputChange}
                        className="w-full bg-slate-50 hover:bg-slate-100/50 border border-slate-100 text-slate-800 text-sm py-2 px-3.5 rounded-xl outline-none transition focus:ring-2 focus:ring-indigo-600/20"
                        placeholder="e.g. Mohd Aman"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 mb-1.5 uppercase tracking-wide">Mobile WhatsApp Number</label>
                      <input
                        type="tel"
                        name="contactNumber"
                        value={formData.contactNumber}
                        onChange={handleInputChange}
                        className="w-full bg-slate-50 hover:bg-slate-100/50 border border-slate-100 text-slate-800 text-sm py-2 px-3.5 rounded-xl outline-none transition focus:ring-2 focus:ring-indigo-600/20"
                        placeholder="e.g. 9267900106"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 mb-1.5 uppercase tracking-wide">Stamp Classification</label>
                      <select
                        name="stampCategory"
                        value={formData.stampCategory}
                        onChange={handleInputChange}
                        className="w-full bg-slate-50 hover:bg-slate-100/50 border border-slate-100 text-slate-800 text-sm py-2 px-3.5 rounded-xl outline-none transition"
                      >
                        <option value="Proprietorship Mohar">Proprietorship Stamp</option>
                        <option value="GST Stamp">GST Detail Stamp</option>
                        <option value="Pvt Ltd Seal">Pvt Ltd Company Seal</option>
                        <option value="Signature Replica">Signature Stamp</option>
                        <option value="Packaging Branding">Packaging Branding</option>
                        <option value="Approved Stamp">Administrative Stamp (Paid/Approved)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 mb-1.5 uppercase tracking-wide">Specific Layout Dimensions</label>
                      <input
                        type="text"
                        name="designInstructions"
                        value={formData.designInstructions}
                        onChange={handleInputChange}
                        className="w-full bg-slate-50 hover:bg-slate-100/50 border border-slate-100 text-slate-800 text-sm py-2 px-3.5 rounded-xl outline-none transition"
                        placeholder="e.g. Round 35mm, or pocket-sized"
                      />
                    </div>
                  </div>

                  {/* Dual Interaction File Upload Wrapper following Usability Patterns */}
                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 mb-1.5 uppercase tracking-wide">
                      Upload Logo Design or Signature Reference
                    </label>
                    
                    <div
                      onDragOver={handleDragOver}
                      onDragLeave={handleDragLeave}
                      onDrop={handleDrop}
                      onClick={triggerFileSelect}
                      className={`border-2 border-dashed rounded-2xl p-6 text-center cursor-pointer transition flex flex-col items-center justify-center space-y-2 ${
                        isDragActive
                          ? "border-rose-500 bg-rose-50"
                          : "border-slate-200 hover:border-slate-300 bg-slate-50/50 hover:bg-slate-50"
                      }`}
                    >
                      <input
                        type="file"
                        ref={fileInputRef}
                        onChange={handleFileChange}
                        accept="image/*,application/pdf"
                        className="hidden"
                      />
                      
                      {uploadedFile ? (
                        <>
                          <FileText className="w-8 h-8 text-rose-600" />
                          <div>
                            <p className="text-xs font-semibold text-slate-800">{uploadedFile.name}</p>
                            <p className="text-[10px] text-slate-500 font-mono">
                              {(uploadedFile.size / 1024).toFixed(1)} KB | Click to swap file
                            </p>
                          </div>
                        </>
                      ) : (
                        <>
                          <Upload className="w-8 h-8 text-rose-500" />
                          <div>
                            <span className="font-semibold text-sm text-indigo-950 block">Drag & Drop references here</span>
                            <span className="text-xs text-slate-400 block mt-0.5">or click to choose files from device</span>
                          </div>
                          <span className="text-[10px] font-mono text-slate-400 bg-white border px-2 py-0.5 rounded shadow-sm">
                            Accepted: PNG, JPEG, PDF
                          </span>
                        </>
                      )}
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-indigo-950 hover:bg-slate-900 text-white font-sans font-medium py-3.5 px-6 rounded-xl shadow-lg transition duration-200 cursor-pointer text-sm font-semibold"
                  >
                    Submit Stamp Custom Specifications
                  </button>
                </form>
              ) : (
                <div className="text-center py-10 space-y-5">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto text-emerald-600">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <div>
                    <h4 className="font-sans font-extrabold text-2xl text-slate-900">Specs Queued Successfully!</h4>
                    <p className="text-slate-500 text-sm mt-1.5 max-w-sm mx-auto">
                      Your layouts have been routed directly to our RS Plaza workshop. Ready visual drafts will reach your phone inside 15 minutes.
                    </p>
                  </div>

                  <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100 space-y-2.5 max-w-md mx-auto">
                    <div className="text-xs font-mono font-semibold text-slate-500 uppercase tracking-widest">
                      Pre-formatted Message Template
                    </div>
                    <p className="text-xs text-slate-600 italic">
                      "Client: {formData.clientName} is requesting a customized {formData.stampCategory} layout proof."
                    </p>
                  </div>

                  <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                    <a
                      href={getUrgentWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-emerald-600 hover:bg-emerald-700 text-white font-sans font-medium py-3 px-6 rounded-xl shadow-lg flex items-center justify-center gap-2 transition"
                    >
                      <ShieldCheck className="w-4 h-4" />
                      <span>Ping Directly on WhatsApp</span>
                    </a>
                    <button
                      onClick={() => {
                        setSubmitSuccess(false);
                        setFormData({ clientName: "", contactNumber: "", stampCategory: "GST Stamp", designInstructions: "" });
                        setUploadedFile(null);
                      }}
                      className="text-slate-500 text-xs hover:text-slate-800 transition py-3"
                    >
                      Draft Another Stamp Inquiry
                    </button>
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
