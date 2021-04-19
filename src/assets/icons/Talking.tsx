import { SVGProps } from 'ui/interfaces'
import React from 'react'

const Talking: React.FC<SVGProps> = (props: SVGProps) => {
  const { width = '24', height = '24', color = '#000' } = props

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 512 512"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <g>
          <path d="m152.949 396.631c6.815-10.31 10.796-22.65 10.796-35.907 0-35.993-29.294-65.275-65.302-65.275s-65.301 29.282-65.301 65.275c0 13.258 3.982 25.598 10.797 35.909-25.903 10.73-43.932 36.443-43.932 65.371v39.996c0 5.523 4.477 10 10 10h176.873c5.523 0 10-4.477 10-10v-39.996c0-28.932-18.029-54.645-43.931-65.373zm-54.506-81.182c24.979 0 45.302 20.31 45.302 45.275 0 24.98-20.322 45.303-45.302 45.303-24.979 0-45.301-20.323-45.301-45.303 0-24.965 20.322-45.275 45.301-45.275zm78.437 176.551h-156.873v-29.996c0-23.42 16.48-43.905 38.965-49.302 10.972 8.353 24.649 13.325 39.471 13.325s28.5-4.972 39.472-13.325c22.485 5.393 38.965 25.879 38.965 49.302z" />
          <path d="m468.034 396.63c6.814-10.31 10.795-22.649 10.795-35.906 0-35.993-29.294-65.275-65.301-65.275-35.992 0-65.273 29.282-65.273 65.275 0 13.254 3.978 25.592 10.788 35.901-25.913 10.725-43.951 36.443-43.951 65.379v39.996c0 5.523 4.477 10 10 10h176.902c5.523 0 10-4.477 10-10v-39.996c-.001-28.932-18.041-54.647-43.96-65.374zm-54.506-81.181c24.979 0 45.301 20.31 45.301 45.275 0 24.98-20.322 45.303-45.301 45.303-24.964 0-45.273-20.323-45.273-45.303 0-24.965 20.309-45.275 45.273-45.275zm78.465 176.551h-156.902v-29.996c0-23.424 16.487-43.913 38.979-49.305 10.968 8.354 24.641 13.328 39.458 13.328 14.822 0 28.5-4.973 39.472-13.326 22.501 5.395 38.992 25.881 38.992 49.303v29.996z" />
          <path d="m413.806 264.238c1.638 1.049 3.512 1.578 5.392 1.578 1.618 0 3.239-.392 4.716-1.182 3.192-1.707 5.212-5.007 5.282-8.626l.578-30.176c26.49-6.495 46.137-30.715 46.137-58.682 0-29.262-20.919-53.723-48.585-59.232 1.423-6.332 2.155-12.799 2.155-19.344-.001-48.84-39.734-88.574-88.573-88.574h-68.227c-5.523 0-10 4.477-10 10s4.477 10 10 10h68.227c37.811 0 68.573 30.763 68.573 68.575 0 6.174-.835 12.261-2.47 18.176h-136.597c-29.896 0-54.774 21.839-59.555 50.399h-26.869c-2.261 0-4.455.766-6.225 2.173l-59.227 47.105-.771-39.785c-.099-5.111-4.037-9.325-9.13-9.769-35.092-3.057-62.581-33.058-62.581-68.301 0-37.81 30.774-68.573 68.601-68.573h68.227c5.523 0 10-4.477 10-10s-4.477-10-10-10h-68.227c-48.855 0-88.601 39.734-88.601 88.575 0 22.223 8.344 43.51 23.496 59.942 12.982 14.079 29.913 23.486 48.384 27.036l.997 51.487c.074 3.804 2.299 7.236 5.741 8.855 1.357.639 2.81.952 4.256.952 2.221 0 4.423-.739 6.226-2.173l72.325-57.523h23.378c4.781 28.56 29.659 50.399 59.555 50.399h86.077zm-183.79-97.088c0-22.276 18.123-40.399 40.398-40.399h145.099c22.275 0 40.398 18.123 40.398 40.399 0 20.762-16.184 38.437-36.845 40.238-5.094.444-9.032 4.659-9.129 9.771l-.395 20.602-44.733-28.635c-1.609-1.03-3.48-1.578-5.391-1.578h-89.004c-22.276.001-40.398-18.122-40.398-40.398z" />
          <path d="m286.23 157.136c-5.523 0-10 4.491-10 10.014s4.477 10 10 10 10-4.477 10-10v-.028c0-5.523-4.477-9.986-10-9.986z" />
          <path d="m342.977 157.136c-5.523 0-10 4.491-10 10.014s4.477 10 10 10 10-4.477 10-10v-.028c0-5.523-4.477-9.986-10-9.986z" />
          <path d="m399.696 177.15c5.523 0 10-4.477 10-10v-.028c0-5.523-4.477-9.986-10-9.986s-10 4.491-10 10.014 4.477 10 10 10z" />
          <path d="m227.782 20h.057c5.523 0 9.972-4.477 9.972-10s-4.505-10-10.028-10-10 4.477-10 10 4.476 10 9.999 10z" />
        </g>
      </g>
    </svg>
  )
}

export default Talking
