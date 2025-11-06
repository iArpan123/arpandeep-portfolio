import React from "react";

export default function Timeline({ items }) {
  return (
    <div className="timeline">
      {items.map((item, idx) => (
        <div className="timeline-item" key={idx}>
          <div className="timeline-dot" />
          <div className="timeline-card">
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "baseline",
                gap: 10,
              }}
            >
              <div style={{ fontWeight: 700 }}>
                {item.role} · {item.company}
              </div>
              <div style={{ color: "var(--muted)" }}>{item.date}</div>
            </div>

            <div style={{ color: "var(--muted)" }}>{item.location}</div>

            {item.summary && (
              <p style={{ marginTop: 10, lineHeight: 1.6 }}>{item.summary}</p>
            )}

            {item.highlights && item.highlights.length > 0 && (
              <ul style={{ marginTop: 10 }}>
                {item.highlights.map((h, i) => (
                  <li
                    key={i}
                    style={{
                      marginBottom: 6,
                      color: "var(--muted)",
                      lineHeight: 1.5,
                    }}
                  >
                    {h}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
