"use client";

import React, { useState, useEffect } from "react";
import { FileSignature, CheckCircle, AlertTriangle, Sparkles, RefreshCw, Send, HelpCircle } from "lucide-react";
import { StampCustomizerState } from "../types";
import { BUSINESS_INFO } from "../data";

const BLOCKED_TERMS = [
  "counterfeit",
  "forged",
  "fake government",
  "fake gst",
  "fake seal",
  "fraud",
  "illegal",
  "unauthorized government",
];

export default function StampCustomizer() {
  const [formData, setFormData] = useState<StampCustomizerState>({
    stampText: "NEPTASTIC SERVICES PVT LTD",
    subtitle: "DIRECTOR",
    stampType: "company_seal",
    size: "round_35mm",
    inkColor: "blue",
    businessNature: "Retail & Distribution"
  });

  const [aiSuggestions, setAiSuggestions] = useState<string[]>([
    "Select your stamp type and enter your details to generate an instant design.",
    "Click 'AI Proofread & Legal Check' to run a simple dummy validator that allows normal text and only flags blocked wording."
  ]);
  const [legalAlert, setLegalAlert] = useState<string | null>(null);
  const [isAiLoading, setIsAiLoading] = useState(false);
  const [isAiOptimized, setIsAiOptimized] = useState(false);

  // Auto-switch layouts and sizes based on Stamp Type for high usability
  useEffect(() => {
    if (formData.stampType === "proprietorship") {
      setFormData(prev => ({
        ...prev,
        stampText: prev.stampText === "NEPTASTIC SERVICES PVT LTD" ? "MOHAR & STAMP CORNER" : prev.stampText,
        subtitle: "PROPRIETOR",
        size: "medium"
      }));
    } else if (formData.stampType === "company_seal") {
      setFormData(prev => ({
        ...prev,
        subtitle: "DIRECTOR",
        size: "round_35mm"
      }));
    } else if (formData.stampType === "gst") {
      setFormData(prev => ({
        ...prev,
        stampText: prev.stampText === "NEPTASTIC SERVICES PVT LTD" ? "NEPTASTIC ENTERPRISES" : prev.stampText,
        subtitle: "GSTIN: 09AAECN1234F1Z9\nSector 1, Greater Noida West",
        size: "large"
      }));
    } else if (formData.stampType === "check_approved") {
      setFormData(prev => ({
        ...prev,
        stampText: "APPROVED FOR PAYMENT",
        subtitle: "DATE: _____________\nBY: _____________",
        size: "medium",
        inkColor: "red"
      }));
    } else if (formData.stampType === "signature") {
      setFormData(prev => ({
        ...prev,
        stampText: "AUTHORIZED SIGNATURE",
        subtitle: "NEPTASTIC BRANDING STAMPS",
        size: "small"
      }));
    }
  }, [formData.stampType]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleUpdateColor = (color: "blue" | "red" | "black" | "violet") => {
    setFormData(prev => ({ ...prev, inkColor: color }));
  };

  // call the fullstack backend API
  const handleAiCheck = async () => {
    setIsAiLoading(true);
    setLegalAlert(null);
    const inputText = `${formData.stampText} ${formData.subtitle}`.toLowerCase();
    const matchedBlockedTerms = BLOCKED_TERMS.filter((term) => inputText.includes(term));

    let formattedText = formData.stampText;
    let formattedSub = formData.subtitle || "";
    let alert: string | null = null;

    const suggestions: string[] = [
      "Dummy validator active: normal business text is allowed.",
      "Only a small blocked-term list is checked for suspicious or clearly disallowed wording.",
    ];

    if (formData.stampType === "gst") {
      const gstRegex = /\d{2}[A-Z]{5}\d{4}[A-Z][A-Z\d][Z][A-Z\d]/i;
      const hasGST = gstRegex.test(formData.stampText) || gstRegex.test(formData.subtitle || "");
      formattedText = formData.stampText.toUpperCase();
      formattedSub = (formData.subtitle || "GSTIN: [Enter 15-char ID]").toUpperCase();
      suggestions.push(
        hasGST
          ? "GST-looking text detected. The dummy validator allows it."
          : "GST stamp text is allowed, but add a valid 15-character GSTIN if this is for official use.",
      );
    } else if (formData.stampType === "proprietorship") {
      const upperText = formData.stampText.toUpperCase();
      formattedText = upperText.startsWith("FOR ") ? upperText : `For ${upperText}`;
      formattedSub = formData.subtitle?.trim() ? formData.subtitle : "PROPRIETOR";
      suggestions.push(
        "Proprietorship layouts usually work best with 'For [Firm Name]' and a proprietor designation below.",
      );
    } else if (formData.stampType === "company_seal") {
      formattedText = formData.stampText.toUpperCase();
      formattedSub = formData.subtitle?.trim() ? formData.subtitle.toUpperCase() : "DIRECTOR / AUTH. SIGNATORY";
      suggestions.push(
        "Company seal text is allowed. Keep the registered name outside and signatory text inside.",
      );
    } else {
      suggestions.push(
        "This text is allowed. Keep the layout short and readable for the cleanest impression.",
      );
    }

    if (matchedBlockedTerms.length > 0) {
      alert = `Blocked wording detected: ${matchedBlockedTerms.join(", ")}. Remove those terms before approval.`;
      suggestions.unshift(
        "This draft includes blocked wording from the restricted list and should be edited.",
      );
    }

    if (formData.businessNature) {
      suggestions.push(`Business type noted: ${formData.businessNature}.`);
    }

    setFormData((prev) => ({
      ...prev,
      stampText: formattedText || prev.stampText,
      subtitle: formattedSub || prev.subtitle,
    }));
    setAiSuggestions(suggestions);
    setLegalAlert(alert);
    setIsAiOptimized(true);
    setIsAiLoading(false);
  };

  const getInkHex = () => {
    switch (formData.inkColor) {
      case "blue": return "#0038A8"; // Deep Royal Blue
      case "red": return "#BE123C";  // Scarlet Red
      case "black": return "#1E293B"; // Coal Black
      case "violet": return "#6B21A8"; // Violet Mohar Ink
    }
  };

  const getWhatsAppOrderUrl = () => {
    const textDetails = `Hello Neptastic Stamp Service, I want to order a stamp:\n- Type: ${formData.stampType}\n- Main Text: ${formData.stampText}\n- Subtext Details: ${formData.subtitle.replace(/\n/g, ", ")}\n- Color: ${formData.inkColor.toUpperCase()}\n- Target Size: ${formData.size.toUpperCase()}`;
    return `https://wa.me/919267900106?text=${encodeURIComponent(textDetails)}`;
  };

  const isRound = formData.stampType === "company_seal" || formData.stampType === "office_seal" || formData.size.startsWith("round_");

  return (
    <div id="stamp-customizer" className="bg-white rounded-3xl border border-slate-100 p-6 sm:p-8 lg:p-10 shadow-xl max-w-7xl mx-auto my-12">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <span className="bg-rose-50 text-rose-600 font-mono text-xs tracking-widest px-3 py-1.5 rounded-full uppercase font-medium">
          Interactive Design Studio
        </span>
        <h3 className="font-sans font-semibold tracking-tight text-3xl text-slate-900 mt-3 md:text-4xl">
          Visual Stamp Proofing Tool & AI Checker
        </h3>
        <p className="text-slate-500 text-sm mt-2">
          Configure your stamp dimensions, select active ink colors, and run a simple text validator for blocked wording and common formatting hints.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Left column: Controls */}
        <div className="lg:col-span-7 space-y-6">
          <div className="bg-slate-50/70 rounded-2xl p-5 border border-slate-100 space-y-4">
            <h4 className="font-sans font-medium text-slate-800 text-sm flex items-center justify-between">
              <span>Configure Stamp Details</span>
              <span className="text-xs text-slate-500 bg-white px-2 py-0.5 rounded border border-slate-100 uppercase font-mono">
                Step 1 of 2
              </span>
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1.5 uppercase tracking-wider">Stamp Category</label>
                <select
                  name="stampType"
                  value={formData.stampType}
                  onChange={handleInputChange}
                  className="w-full bg-white hover:border-slate-300 text-slate-800 text-sm py-2 px-3 rounded-lg border border-slate-200 outline-none transition focus:border-indigo-600"
                >
                  <option value="proprietorship">Proprietorship Stamp</option>
                  <option value="company_seal">Pvt Ltd Company Seal (Round)</option>
                  <option value="gst">GST Detail Stamp</option>
                  <option value="signature">Signature Stamp</option>
                  <option value="check_approved">Verify / Approved / Paid Stamp</option>
                  <option value="office_seal">Round Office Seal</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1.5 uppercase tracking-wider">Size & Shell</label>
                <select
                  name="size"
                  value={formData.size}
                  onChange={handleInputChange}
                  className="w-full bg-white hover:border-slate-300 text-slate-800 text-sm py-2 px-3 rounded-lg border border-slate-200 outline-none transition focus:border-indigo-600"
                >
                  <option value="small">Small Pocket (38mm x 14mm)</option>
                  <option value="medium">Medium Standard (47mm x 18mm)</option>
                  <option value="large">Large GST Block (58mm x 22mm)</option>
                  <option value="round_35mm">Concentric Round (35mm Diameter)</option>
                  <option value="round_45mm">Concentric Round Large (45mm Diameter)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-1.5 uppercase tracking-wider">
                {isRound ? "Outer Circle Text / Registered Firm Name" : "Heading / Firm Legal Name"}
              </label>
              <input
                type="text"
                name="stampText"
                value={formData.stampText}
                onChange={handleInputChange}
                className="w-full bg-white text-slate-800 text-sm py-2.5 px-3.5 rounded-lg border border-slate-200 outline-none transition focus:border-indigo-600 hover:border-slate-300"
                placeholder="Enter Company / Owner / Office Name"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-1.5 uppercase tracking-wider">
                {isRound ? "Center Text / Designation" : "Subtitle text (Address / GSTIN / Designation)"}
              </label>
              <textarea
                name="subtitle"
                rows={3}
                value={formData.subtitle}
                onChange={handleInputChange}
                className="w-full bg-white text-slate-800 text-sm py-2 px-3.5 rounded-lg border border-slate-200 outline-none transition focus:border-indigo-600 hover:border-slate-300 resize-none"
                placeholder="Details printed below header..."
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-2 uppercase tracking-wider">Ink Impressions Color</label>
                <div className="flex gap-2.5">
                  {(["blue", "red", "black", "violet"] as const).map((col) => (
                    <button
                      key={col}
                      onClick={() => handleUpdateColor(col)}
                      className={`w-9 h-9 rounded-full border-2 transition relative flex items-center justify-center`}
                      style={{
                        backgroundColor: col === "blue" ? "#0038A8" : col === "red" ? "#BE123C" : col === "black" ? "#1E293B" : "#6B21A8",
                        borderColor: formData.inkColor === col ? "#6366F1" : "transparent"
                      }}
                      title={`${col.toUpperCase()} Impression Ink`}
                    >
                      {formData.inkColor === col && (
                        <div className="w-2.5 h-2.5 bg-white rounded-full shadow" />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1.5 uppercase tracking-wider">Nature of Business</label>
                <input
                  type="text"
                  name="businessNature"
                  value={formData.businessNature}
                  onChange={handleInputChange}
                  className="w-full bg-white text-slate-800 text-sm py-2 px-3 rounded-lg border border-slate-200 outline-none transition focus:border-indigo-600"
                  placeholder="e.g. Export, Retail Shop, Legal Clinic"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={handleAiCheck}
              disabled={isAiLoading}
              className="flex-1 bg-indigo-950 hover:bg-slate-900 border border-slate-800 text-white font-sans font-medium py-3 px-5 rounded-xl shadow-lg flex items-center justify-center gap-2.5 disabled:opacity-75 transition"
            >
              {isAiLoading ? (
                <RefreshCw className="w-5 h-5 animate-spin" />
              ) : (
                <Sparkles className="w-5 h-5 text-amber-400" />
              )}
              {isAiLoading ? "Processing Layout..." : "AI Proofread & Legal Check"}
            </button>
          </div>

          {/* AI Advisor Panel */}
          <div className="border border-slate-100 rounded-2xl bg-slate-50 p-5 space-y-3.5">
            <h5 className="font-sans font-semibold text-slate-800 text-sm flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-emerald-600" />
              <span>Neptastic Text Check Suggestions</span>
              {isAiOptimized && (
                <span className="text-[10px] font-mono text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full font-bold">
                  Checked
                </span>
              )}
            </h5>

            {legalAlert && (
              <div className="bg-amber-50 border-l-4 border-amber-500 rounded-r-lg p-3 text-xs text-amber-800 flex items-start gap-2.5">
                <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold block mb-0.5">Format Warning:</span>
                  {legalAlert}
                </div>
              </div>
            )}

            <ul className="space-y-2">
              {aiSuggestions.map((sug, idx) => (
                <li key={idx} className="text-xs text-slate-600 flex items-start gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-indigo-700 shrink-0 mt-0.5" />
                  <span>{sug}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right column: Physical Live SVG Impression Preview */}
        <div id="stamp-preview-container" className="lg:col-span-5 flex flex-col items-center">
          <span className="block text-xs font-semibold text-slate-500 mb-2 uppercase tracking-widest text-center">
            Physical Ink Impression Preview
          </span>

          {/* Stamp boundary machine block */}
          <div className="w-full bg-slate-100 rounded-3xl border-2 border-slate-200 p-8 flex flex-col items-center justify-center overflow-hidden relative shadow-inner min-h-[380px] bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:16px_16px]">
            <div className="absolute top-3 left-4 text-[9px] font-mono text-slate-400 select-none">
              SHAPE: {isRound ? "ROUND CIRCLE" : "RECTANGLE"} | COLOR: {formData.inkColor.toUpperCase()}
            </div>

            {/* Custom SVG Stamp Representation */}
            {isRound ? (
              // Concentric circular stamp rendering using SVG
              <svg
                id="svg-round-stamp"
                viewBox="0 0 240 240"
                className="w-52 h-52 sm:w-60 sm:h-60 transform hover:scale-105 transition duration-300 cursor-zoom-in"
                style={{ color: getInkHex() }}
              >
                {/* SVG path definition for text curvature */}
                <defs>
                  <path id="stampCirclePath" d="M 120 120 m -85, 0 a 85,85 0 1,1 170,0 a 85,85 0 1,1 -170,0" />
                </defs>

                {/* Outer concentric stamp rings with grunge bleed mock */}
                <circle cx="120" cy="120" r="105" fill="none" stroke="currentColor" strokeWidth="4.5" strokeDasharray={isAiOptimized ? "none" : "320 2"} />
                <circle cx="120" cy="120" r="95" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />
                <circle cx="120" cy="120" r="54" fill="none" stroke="currentColor" strokeWidth="2" />

                {/* Curved outer text */}
                <text fill="currentColor" stroke="currentColor" strokeWidth="0.5" className="font-sans font-bold uppercase tracking-widest text-[12px] select-none">
                  <textPath href="#stampCirclePath" startOffset="50%" textAnchor="middle">
                    {formData.stampText || "MOHAR SERVICES BY NEPTASTIC"}
                  </textPath>
                </text>

                {/* Center text lines */}
                <g className="font-sans text-center uppercase" fill="currentColor">
                  {formData.subtitle.split("\n").map((line, idx, arr) => {
                    const lineOffset = arr.length === 1 ? 0 : (idx - (arr.length - 1) / 2) * 16;
                    return (
                      <text
                        key={idx}
                        x="120"
                        y={120 + lineOffset + 4}
                        fontFamily="monospace sans-serif"
                        className={idx === 0 ? "font-bold text-[11px]" : "font-semibold text-[8px] tracking-normal"}
                        textAnchor="middle"
                      >
                        {line || "DIRECTOR"}
                      </text>
                    );
                  })}
                </g>
              </svg>
            ) : (
              // Rectangular stamp rendering with bordered boxes and grid
              <div
                id="stamp-rect-impression"
                className="w-full max-w-sm rounded border-4 p-5 sm:p-7 flex flex-col justify-center items-center font-sans tracking-wide text-center uppercase border-double transform hover:scale-105 transition duration-300 min-h-[160px]"
                style={{
                  color: getInkHex(),
                  borderColor: getInkHex(),
                  borderStyle: "double",
                  borderWidth: "6px"
                }}
              >
                {/* Simulated inner legal stamp lines */}
                {formData.stampType === "gst" && (
                  <div className="w-full border-t border-b py-1.5 mb-2.5 border-dashed border-current flex justify-between px-2 text-[10px] font-mono select-none">
                    <span>* REG TAX PAYER *</span>
                    <span>GREATER NOIDA WEST</span>
                  </div>
                )}

                {formData.stampType === "proprietorship" && (
                  <div className="text-[12px] tracking-widest font-bold self-start pl-2 mb-2 select-none" style={{ color: getInkHex() }}>
                    FOR {formData.stampText || "ENTER BUSINESS NAME"}
                  </div>
                )}

                {/* Main Heading block */}
                {formData.stampType !== "proprietorship" && (
                  <h4 className="font-sans font-bold text-lg md:text-xl tracking-wider select-none mb-1.5 break-all">
                    {formData.stampText}
                  </h4>
                )}

                {/* Separator */}
                <div className="w-16 h-0.5 my-1.5 bg-current opacity-70" />

                {/* Subtitle / extra lines */}
                <div className="space-y-1.5 w-full">
                  {formData.subtitle.split("\n").map((line, idx) => (
                    <p key={idx} className="text-xs font-mono font-medium tracking-normal select-none break-words">
                      {line}
                    </p>
                  ))}
                </div>

                {/* Standard Proprietor / Signature slots */}
                {(formData.stampType === "proprietorship" || formData.stampType === "signature" || formData.stampType === "company_seal") && (
                  <div className="w-full mt-5 border-t border-current pt-1 border-dashed flex justify-between items-center px-2 text-[10px] select-none text-slate-500">
                    <span className="font-mono text-[8px] tracking-tighter opacity-70">SIGNATURE SLOT</span>
                    <span className="font-bold tracking-widest font-sans" style={{ color: getInkHex() }}>
                      {formData.stampType === "proprietorship" ? "PROPRIETOR" : "AUTH. SIGNATORY"}
                    </span>
                  </div>
                )}
              </div>
            )}

            {/* Simulated subtle ink degradation blur / rustic background filter */}
            <div className="w-full text-center mt-5">
              <span className="inline-flex items-center gap-1.5 bg-slate-200/50 text-slate-500 text-[10px] font-mono py-1 px-3.5 rounded-full uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-pulse" />
                Simulated Laser Ink Bleed Enabled
              </span>
            </div>
          </div>

          <div className="w-full mt-4 flex gap-3">
            <a
              href={getWhatsAppOrderUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-sans text-center font-medium py-3 px-4 rounded-xl shadow flex items-center justify-center gap-2 transition"
            >
              <Send className="w-4 h-4" />
              <span>Confirm & Order on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
