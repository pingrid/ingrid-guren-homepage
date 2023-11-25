import React from 'react';

export function Skryt({ color }: { color: string }) {
  return (
    <div className={'skryt-page'}>
      <h1 style={{ color }}>Workshops, talks and div</h1>
      <p className={'fu-janteloven'} style={{ color }}>
        Yeyey, janteloven and all that shit. I'm still proud of past achievements{' '}
      </p>
      <div className={'skryteliste'}>
        <p><a href={`https://2023.javazone.no/program/75bcefdc-0f1c-45c7-a4e7-54c720f46c0f`}>
            Ikke alle angrep er slemme: DDoS innenfra og utenfra</a> (Foredrag på JavaZone 2023)
        </p>
       <p> <a href={`https://www.youtube.com/watch?app=desktop&v=N3Lou2V1iec`}>
        Preparing for disaster: Handling the Election and MGP at NRK.no</a> (NDC 2022)
        </p>
        <p>
          <b>2022: Had the coolest kid 👶</b>
        </p>
        <p>
          <a href={`https://vimeo.com/669321216`}>Forberedt på det verste</a> (Foredrag på JavaZone 2021)
        </p>
        <a
          href={`https://pingrid.github.io/nrk-kubernetes-intro/pingrid-nrk-introduction-to-kubernetes-cluster`}
        >
          Introduction to Kubernetes on Microsoft Azure
        </a>
        <p>
          <a href={`https://github.com/mathjoh/google-home-101`}>Introduction to Google Home</a>{' '}
          (NDC Oslo 2019)
        </p>
        <p>
          <a href={`https://github.com/linemos/kubernetes-intro)`}>Introduction to Kubernetes</a>{' '}
          (NDC Oslo 2018, BitShift 2018, NDC London 2019)
        </p>
        <p>
          <a href={`https://github.com/vibbio/introduction-to-kubernetes`}>
            Introduction to Kubernetes
          </a>{' '}
          (JavaZone 2017)
        </p>
      </div>
    </div>
  );
}
