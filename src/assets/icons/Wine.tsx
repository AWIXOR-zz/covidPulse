import { SVGProps } from 'ui/interfaces'
import React from 'react'

const Wine: React.FC<SVGProps> = (props: SVGProps) => {
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
          <path d="M286,451.29c-5.52,0-10,4.48-10,10c0,5.52,4.48,10,10,10c5.52,0,10-4.48,10-10S291.52,451.29,286,451.29z" />
        </g>
      </g>
      <g>
        <g>
          <path
            d="M145.5,200.29c-5.523,0-10,4.477-10,10v191c0,5.523,4.477,10,10,10s10-4.477,10-10v-191
			C155.5,204.767,151.023,200.29,145.5,200.29z"
          />
        </g>
      </g>
      <g>
        <g>
          <path
            d="M225.5,200.29c-5.523,0-10,4.477-10,10v191c0,5.523,4.477,10,10,10s10-4.477,10-10v-191
			C235.5,204.767,231.023,200.29,225.5,200.29z"
          />
        </g>
      </g>
      <g>
        <g>
          <path
            d="M426.5,161h-50v-30.259c15.675-11.751,23.125-31.613,18.707-51.224c-4.133-18.39-19.313-33.398-37.768-37.345
			c-9.811-2.105-19.692-1.36-28.695,2.063C319.716,30.002,303.862,21,286.5,21c-6.544,0-12.939,1.269-18.852,3.711
			C250.91,8.922,228.843,0,206,0c-30.216,0-58.396,15.393-75.03,40.579C78.7,37.687,35.5,79.156,35.5,130.29v120
			c0,16.542,13.682,30,30.5,30c3.689,0,7.224-0.671,10.5-1.893V462c0,27.57,22.43,50,50,50h200c27.57,0,50-22.43,50-50v-30h50
			c27.57,0,50-22.43,50-50V211C476.5,183.43,454.07,161,426.5,161z M356.5,452h-30.51c-5.523,0-10,4.477-10,10s4.477,9.9,10,9.9
			h28.79c-4.128,11.639-15.244,20.1-28.28,20.1h-200c-13.036,0-24.152-8.361-28.28-20h147.79c5.523,0,10-4.477,10-10
			s-4.477-10-10-10H96.5V250.07v-70.564c22.463-3.391,41.914-17.538,52.14-38.505c2.086,0,3.924,0.722,5.309,2.081
			c11.286,11.098,26.22,17.209,42.051,17.209c16.408,0,31.725-6.495,43.135-18.295c0.61-0.632,1.473-0.995,2.365-0.995
			c15.567,0,25.753,3.325,30.277,9.881c3.729,5.405,3.726,12.915,3.723,18.95v40.459c0,13.036,8.361,24.152,20,28.28v162.72
			c0,5.523,4.477,10,10,10s10-4.477,10-10V238.57c11.639-4.128,20-15.243,20-28.28v-70.464c7.005,1.398,14.154,1.407,21,0.007V452z
			 M330.033,116.947c-3.1-1.577-6.796-1.43-9.762,0.389c-2.965,1.818-4.772,5.046-4.772,8.524v84.43c0,5.514-4.486,10-10,10
			c-5.514,0-10-4.486-10-10v-40.452c0.003-7.876,0.008-19.779-7.261-30.315C279.759,127.232,264.034,121,241.5,121
			c-6.29,0-12.396,2.589-16.749,7.099c-7.602,7.862-17.813,12.191-28.751,12.191c-10.553,0-20.507-4.073-28.035-11.477
			c-5.133-5.039-11.996-7.813-19.325-7.813c-7.579,0-14.623,4.397-17.946,11.202c-8.382,17.164-25.35,27.927-44.28,28.089
			c-5.489,0.047-9.915,4.51-9.915,10v79.525C76.147,255.705,71.568,260.29,66,260.29c-5.691,0-10.5-4.58-10.5-10v-120
			c0-38.596,31.582-69.852,70.407-69.852c3.017,0,6.05,0.192,9.081,0.581c4.045,0.519,7.998-1.471,9.993-5.026
			C157.437,33.792,180.818,20,206,20c19.73,0,38.752,8.615,52.187,23.637c3.256,3.642,8.668,4.398,12.799,1.785
			C275.559,42.529,280.924,41,286.5,41c12.73,0,24.108,8.061,28.313,20.057c1.023,2.92,3.341,5.203,6.277,6.181
			c2.935,0.978,6.159,0.542,8.729-1.182c6.816-4.57,15.134-6.107,23.429-4.327c10.8,2.31,20.03,11.428,22.446,22.179
			C381.386,109.172,355.489,129.896,330.033,116.947z M376.5,221h40v151h-40V221z M456.5,382c0,16.542-13.458,30-30,30h-50v-20h50
			c5.523,0,10-4.477,10-10V211c0-5.523-4.477-10-10-10h-50v-20h50c16.542,0,30,13.458,30,30V382z"
          />
        </g>
      </g>
    </svg>
  )
}

export default Wine
